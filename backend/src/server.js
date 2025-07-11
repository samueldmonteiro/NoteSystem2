import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js"

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", noteRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT);
    });
  });