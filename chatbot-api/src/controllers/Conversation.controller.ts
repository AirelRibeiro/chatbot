import { NextFunction, Request, Response } from 'express';
import ConversationService from '../services/Conversation.service';

class ConversationController {
  constructor(private conversationService: ConversationService) {}

  async findAll(_req: Request, res: Response): Promise<Response> {
    const conversations = await this.conversationService.findAll();
    return res.status(200).json(conversations);
  }

  async findByPk(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const conversations = await this.conversationService.findByPk(Number(id));
      return res.status(200).json({ conversations });
    } catch (err) {
      return next(err);
    }
  }

  async findByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { user } = req.query;
      const conversations = await this.conversationService.findByUser(
        user as string
      );
      return res.status(200).json(conversations);
    } catch (err) {
      return next(err);
    }
  }

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const conversation = await this.conversationService.create(req.body);
      return res.status(201).json(conversation);
    } catch (err) {
      return next(err);
    }
  }
}

export default ConversationController;
