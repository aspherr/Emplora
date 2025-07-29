import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

import recordRoutes from "./routes/recordsRoutes.js" 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/records", recordRoutes);

connectDB();

app.listen(PORT, () => {
    console.log("Server started at port: 3000")
});
