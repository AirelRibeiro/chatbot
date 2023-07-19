import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Chat from './components/Chat';
import ContactForm from './components/ContactForm';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/chat', element: <Chat /> },
  { path: '/contact-form', element: <ContactForm /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
