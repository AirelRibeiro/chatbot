import * as express from 'express';
require('express-async-errors');
import Conversation from '../database/models/Conversation';
import ConversationService from '../services/Conversation.service';
import ConversationController from '../controllers/Conversation.controller';
import contentValidation from '../middlewares/validateContent';

const conversationRoute = express.Router();

const conversationController = new ConversationController(
  new ConversationService(Conversation)
);

conversationRoute.post('/', contentValidation, (req, res, next) => {
  conversationController.create(req, res, next);
});

conversationRoute.get('/search', (req, res, next) => {
  conversationController.findByUser(req, res, next);
});

conversationRoute.get('/:id', (req, res, next) => {
  conversationController.findByPk(req, res, next);
});

conversationRoute.get('/', (req, res) => {
  conversationController.findAll(req, res);
});

export default conversationRoute;
