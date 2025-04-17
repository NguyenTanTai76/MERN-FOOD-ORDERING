import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Tải biến môi trường từ file .env
dotenv.config();

// Kiểm tra xem MONGODB_URI có tồn tại trong .env không
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('MONGODB_URI is not defined in .env file!');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully!');
  } catch (error: any) {
    console.error('MongoDB connection failed!', error.message);
    process.exit(1);
  }
};

export default connectDB;
