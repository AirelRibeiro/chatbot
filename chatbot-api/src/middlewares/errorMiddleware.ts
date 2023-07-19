import { NextFunction, Request, Response } from 'express';

type errInformation = {
  [key: string]: { message: string; code: number };
};

const errorsInformation: errInformation = {
  conversationNotFound: {
    message: 'Não há conversa salva com esse Id.',
    code: 404,
  },
  invalidFields: { message: 'Todos os campos são obrigatórios!', code: 400 },
  conversationsNotFound: {
    message: 'Não há conversas salvas sob esse username.',
    code: 404,
  },
};

export default function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const { message } = error;
  if (errorsInformation[message]) {
    const errorType = errorsInformation[message];
    return res.status(errorType.code).json({ message: errorType.message });
  }
  return res.status(500).json({ message });
}
