import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoute from './routers/user.routes';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/api/users', userRoute);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
