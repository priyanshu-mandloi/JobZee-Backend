import applicationRouter from './routes/applicationRoutes.js';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {dbConnection} from './database/dbconnection.js';
import {errorMiddleware} from './middlewares/error.js';
import express from "express";
import fileUpload from 'express-fileupload';
import jobRouter from './routes/jobRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
config({path: "./config/config.env"});
app.use(cors({
   origin: process.env.FRONTEND_URL,
    methods:["GET","POST","DELETE","PUT"],
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
   useTempFiles: true,
   tempFileDir: "/tmp/",
}));
app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);
dbConnection();
app.use(errorMiddleware);
export default app;
