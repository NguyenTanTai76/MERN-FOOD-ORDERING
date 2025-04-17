import express from 'express';
import { createCurrentUser } from '../controllers/user.controller';
import { validateCreateUser } from '../validators/user.validator';
import { validateRequest } from '../middlewares/validation.middleware';

const router = express.Router();

router.post('/', validateCreateUser, validateRequest, createCurrentUser);

export default router;
