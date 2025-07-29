import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

import recordRoutes from "./routes/recordsRoutes.js"
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(rateLimiter);

app.use("/api/records", recordRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`)
    });
});
