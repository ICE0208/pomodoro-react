import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Globalstyle from './GlobalStyle.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Globalstyle />
    <App />
  </>,
);
