import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./contactRoute.js"
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT=5000;
connectDB();

app.use("/api/contacts", contactRoute);



app.listen(PORT,(req,res)=>{
  console.log("server is running on port 5000")
})
