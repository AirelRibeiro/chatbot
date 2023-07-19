import React, { useState } from 'react';
import logo from '../images/logo.png';
import conversa from '../database/conversa.json';
import { saveConversationHistory } from '../helpers/conversationFunctions';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [responses, _setResponses] = useState(conversa.respostas);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getBotResponse = (question) => {
    for (const category in conversa.palavras_chave) {
      console.log('entrei aqui');
      const palavrasChave = conversa.palavras_chave[category];
      if (palavrasChave.includes(question.toLowerCase())) {
        console.log('entrei aqui também');
        return responses[category];
      }
    }
    if (question.toLowerCase().includes('empréstimo')) {
      return responses['emprestimos'];
    }
    if (question.toLowerCase().includes('loan')) {
      return responses['loan'];
    }
    return question.includes('?')
      ? 'Desculpe, não entendi sua pergunta. Pode reformulá-la ou fazer outra pergunta?'
      : 'Como posso lhe ajudar hoje?';
  };

  const handleSendMessage = () => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, { [userName]: inputValue }];
      const response = getBotResponse(inputValue);
      setInputValue('');
      return [...updatedMessages, { bot: response }];
    });
  };

  const clickFunction = () => {
    if (inputValue.trim() !== '') {
      if (!userName && !messages.length) {
        setMessages([
          { user: inputValue },
          { bot: 'Olá! Para seguirmos, diga-me seu nome.' },
        ]);
        return setInputValue('');
      }
      if (!userName && messages.length) {
        setUserName(inputValue);
        setMessages([
          ...messages,
          { user: inputValue },
          { bot: 'Perfeito! Agora defina uma senha.' },
        ]);
        return setInputValue('');
      }
      if (!password && userName) {
        setPassword(inputValue);
        setMessages([
          ...messages,
          {
            bot: `Ótimo, ${userName}! Seus nome e senha foram definidos com sucesso. \nComo posso ajudar?`,
          },
        ]);
        return setInputValue('');
      }
      if (password && userName) {
        handleSendMessage();
        return setInputValue('');
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      clickFunction();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <div className="chat-container bg-gray-200 sm:p-6 px-6 pt-6 pb-10 rounded-lg flex-grow relative">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-24 w-auto absolute top-4 right-4"
        />
        <div className="chat-messages pb-20">
          {messages.map((message, index) =>
            message.bot ? (
              <div
                key={index}
                className="message bg-green-300 p-2 my-2 rounded-md shadow break-all"
                dangerouslySetInnerHTML={{
                  __html: message.bot.replace(/\n/g, '<br/>'),
                }}
              ></div>
            ) : (
              <div
                key={index}
                className="message bg-blue-300 p-2 my-2 rounded-md shadow"
              >
                {message.user
                  ? message.user
                  : `${userName}: ${message[userName]}`}
              </div>
            )
          )}
        </div>
        <div className="chat-input mt-4 flex flex-col sm:flex-row fixed bottom-8 left-0 right-0  mx-auto sm:px-14">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Digite uma mensagem..."
            className="flex-1 bg-white border border-gray-300 rounded-l-md py-4 px-4 focus:outline-none  "
          />
          <button
            onClick={clickFunction}
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
          >
            Enviar
          </button>
          <button
            className="bg-pink-900-900 hover:bg-pink-700-700 text-white font-bold py-2 px-4 rounded-r-md"
            onClick={() => saveConversationHistory(messages)}
          >
            Exportar Conversa
          </button>
        </div>
      </div>
    </div>
  );
}
export default Chat;
