import { body, param } from 'express-validator';

export const createNoteValidator = [
  body('title')
    .trim()
    .notEmpty().withMessage('Por favor, informe um título')
    .isLength({ max: 100 }).withMessage('O título não pode exceder 100 caracteres'),
  
  body('content')
    .optional()
    .isLength({ max: 10000 }).withMessage('O conteúdo não pode exceder 10.000 caracteres'),
  
  body('tags')
    .optional()
    .isArray({ max: 10 }).withMessage('Uma nota não pode ter mais de 10 tags')
    .custom(tags => tags.every(tag => typeof tag === 'string')).withMessage('As tags devem ser strings')
];

export const noteIdValidator = [
  param('id')
    .isMongoId().withMessage('ID da nota inválido')
];

export const updateNoteValidator = [
  ...noteIdValidator,
  ...createNoteValidator
];