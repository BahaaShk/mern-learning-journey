import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 5001
const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is on port 5001");
  });
})
