import express from 'express';
import { createCurrentUser } from '../controllers/user.controller';
import { validateCreateUser } from '../validators/user.validator';
import { jwtCheck, validateRequest } from '../middlewares/auth.middleware';

const router = express.Router();

// Route xử lý POST yêu cầu tạo người dùng
router.post(
  '/',
  validateCreateUser,
  validateRequest,
  jwtCheck,
  createCurrentUser
);

export default router;
