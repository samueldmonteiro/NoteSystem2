import { body } from 'express-validator';

export const registerValidator = [
  body('username')
    .trim()
    .notEmpty().withMessage('Por favor, informe um nome de usuário')
    .isLength({ min: 3, max: 30 }).withMessage('O nome de usuário deve ter entre 3 e 30 caracteres')
    .matches(/^[a-zA-Z0-9_]+$/).withMessage('O nome de usuário só pode conter letras, números e underscores'),

  body('email')
    .trim()
    .notEmpty().withMessage('Por favor, informe um email')
    .isEmail().withMessage('Por favor, informe um email válido'),

  body('password')
    .notEmpty().withMessage('Por favor, informe uma senha')
    .isLength({ min: 8 }).withMessage('A senha deve ter pelo menos 8 caracteres')
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    .withMessage('A senha deve conter letras, números e pelo menos um caractere especial (@$!%*?&)'),

  body('confirmpassword')
    .notEmpty().withMessage('Por favor, confirme a senha')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('As senhas não coincidem'),
];