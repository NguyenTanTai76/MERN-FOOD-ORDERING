import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello' });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
