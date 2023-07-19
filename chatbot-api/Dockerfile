FROM node:16.14-alpine

WORKDIR /chatbot-backend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
