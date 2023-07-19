import Conversation from '../database/models/Conversation';
import { Op } from 'sequelize';

class ConversationService {
  constructor(private conversationModel: typeof Conversation) {}

  async create(conversation: Conversation): Promise<Conversation> {
    const createdConversation = await this.conversationModel.create(
      conversation as any
    );
    return createdConversation;
  }

  async findAll(): Promise<Conversation[]> {
    const conversations = await this.conversationModel.findAll();
    return conversations;
  }

  async findByPk(id: number): Promise<Conversation> {
    const conversation = await this.conversationModel.findByPk(id);

    if (!conversation) throw new Error('conversationNotFound');

    return conversation;
  }

  async findByUser(user: string): Promise<Conversation[]> {
    const contents = await this.conversationModel.findAll({
      where: { user: { [Op.like]: `%${user}%` } },
    });
    if (!contents.length) throw new Error('conversationsNotFound');
    return contents;
  }
}

export default ConversationService;
