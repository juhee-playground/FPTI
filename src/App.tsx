import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global-styles';

import Layout from '@/components/layout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
