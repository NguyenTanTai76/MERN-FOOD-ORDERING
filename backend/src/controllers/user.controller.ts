import { Request, Response } from 'express';
import User from '../models/user.model';

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    // Lấy thông tin từ req.body
    const { auth0Id, email, name, addressLine1, city, country } = req.body;

    // Kiểm tra nếu các trường bắt buộc có trong req.body
    if (!auth0Id || !email) {
      res.status(400).json({ message: 'Auth0 ID and Email are required.' });
      return;
    }

    // Kiểm tra nếu người dùng đã tồn tại (dựa trên auth0Id hoặc email)
    const existingUser = await User.findOne({ $or: [{ auth0Id }, { email }] });
    if (existingUser) {
      res
        .status(400)
        .json({ message: 'User with this Auth0 ID or Email already exists!' });
      return;
    }

    // Tạo một người dùng mới
    const newUser = new User({
      auth0Id,
      email,
      name,
      addressLine1,
      city,
      country,
    });

    // Lưu người dùng mới vào database
    await newUser.save();

    // Trả về người dùng vừa được tạo
    res
      .status(201)
      .json({ message: 'Create user successfully!', data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};
