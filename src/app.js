import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

export default app;
