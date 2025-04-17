import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Kiểm tra lỗi validation từ express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next(); // Tiến hành tiếp với các middleware hoặc route handler tiếp theo
};

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
});
