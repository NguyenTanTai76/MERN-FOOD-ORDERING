import { body } from 'express-validator';

export const validateCreateUser = [
  body('auth0Id')
    .notEmpty()
    .withMessage('Auth0Id is required')
    .isString()
    .withMessage('Auth0Id must be a string'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('name').optional().isString().withMessage('Name must be a string'),
  body('addressLine1')
    .optional()
    .isString()
    .withMessage('AddressLine1 must be a string'),
  body('city').optional().isString().withMessage('City must be a string'),
  body('country').optional().isString().withMessage('Country must be a string'),
];
