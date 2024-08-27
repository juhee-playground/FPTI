import { BrowserRouter } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Router from '@/router';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container-mobile'>
          <Router />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
