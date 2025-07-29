import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

import recordRoutes from "./routes/recordsRoutes.js" 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Request method: ${req.method} | Request URL: ${req.url}`);
    next();
})

app.use("/api/records", recordRoutes);

app.listen(PORT, () => {
    console.log("Server started at port: 3000")
});
