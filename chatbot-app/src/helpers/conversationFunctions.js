import Papa from 'papaparse';
import { saveAs } from 'file-saver';

const saveConversationHistory = (messages) => {
  if (messages.length === 0) {
    alert('Não há conversas para exportar.');
    return;
  }
  const conversationData = messages.map((message, index) => {
    const timestamp = new Date().toLocaleString();
    const isUserMessage = message.hasOwnProperty('user');
    const content = isUserMessage ? message.user : message.bot;

    return {
      'Conversa do usuário nº': index + 1,
      'Data e hora': timestamp,
      Mensagem: content,
    };
  });

  const csvHeader = [
    { id: 'Conversa do usuário nº', title: 'Conversa do usuário nº' },
    { id: 'Data e hora', title: 'Data e hora' },
    { id: 'Mensagem', title: 'Mensagem' },
  ];

  const csvContent = [csvHeader, ...conversationData];
  const csvText = csvContent
    .map((row) => Object.values(row).join(','))
    .join('\n');
  const blob = new Blob([csvText], { type: 'text/csv;charset=utf-8' });
  saveAs(blob, 'conversa.csv');

  alert('Conversa criada com sucesso! Escolha onde salvar.');
};

const exportConversationHistory = (messages, user) => {
  const timestamp = new Date().toLocaleString();
  const conversationData = messages.map((message, index) => {
    const timestamp = new Date().toLocaleString();
    const isUserMessage = message.hasOwnProperty('user');
    const content = isUserMessage ? message.user : message.bot;

    return {
      'Conversa do usuário nº': index + 1,
      'Data e hora': timestamp,
      Mensagem: content,
    };
  });

  const csvHeader = ['Conversa do usuário nº', 'Data e hora', 'Mensagem'];

  const csvContent = Papa.unparse({
    fields: csvHeader,
    data: conversationData,
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });

  saveAs(blob, `${user}-${timestamp}.csv`);

  alert('Conversa exportada com sucesso!');
};

export { saveConversationHistory, exportConversationHistory };
