import App from './App';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './styles/reset.css';
import './styles/index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />);
