import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from './routes/userRoutes.js';
import './config/passportConfig.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(passport.initialize());


app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});