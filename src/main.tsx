import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/mobile-navigation.css';
import './styles/logo.css';
import './styles/home-hero.css';

const root = document.getElementById('root');

if (!root) throw new Error('WalletTrail application root was not found.');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
