import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Globalstyle from './GlobalStyle.ts';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Globalstyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>,
);
