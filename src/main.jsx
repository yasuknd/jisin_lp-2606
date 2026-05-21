import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PreviewGate from './components/PreviewGate/PreviewGate.jsx';
import './styles/global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreviewGate>
      <App />
    </PreviewGate>
  </StrictMode>,
);
