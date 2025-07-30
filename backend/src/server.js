import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import recordRoutes from "./routes/recordsRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // defaults to 3000 without custom port

// middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/records", recordRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);
    });
});
