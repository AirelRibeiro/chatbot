import express from 'express';
import conversationRoute from './routes/Conversation.route';
import errorMiddleware from './middlewares/errorMiddleware';
require('express-async-errors');
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use(conversationRoute);

app.use(errorMiddleware);

export default app;
