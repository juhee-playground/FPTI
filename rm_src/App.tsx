// import './App.css';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global-styles';

import Layout from '@/_rm_src/components/layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
