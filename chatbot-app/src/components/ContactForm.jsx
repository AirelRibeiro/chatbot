import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceID = 'service_1xjv9nn';
const templateID = 'template_3bs832m';
const userID = '180-VRWwX3-5FRpgO';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef({
    from_name: name,
    from_email: email,
    message: message,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, formRef.current, userID)
      .then((result) => {
        console.log('Email enviado com sucesso!', result.text);
      })
      .catch((error) => {
        alert('Erro ao enviar o email:', error.text);
      });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        ref={formRef}
        className="w-1/2 bg-gray-300 p-6 rounded-lg"
        onSubmit={sendEmail}
      >
        <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
