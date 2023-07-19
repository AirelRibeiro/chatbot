import { NextFunction, Request, Response } from 'express';

export default function conversationValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;
  if (!body.user || !body.conversation) throw new Error('invalidFields');
  next();
}
