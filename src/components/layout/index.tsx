import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContainer } from './AppContainer.styles';

import Header from '@/components/layout/Header';
import Router from '@/router';

export default function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <AppContainer>
      <Suspense>
        {!isLandingPage && <Header />}
        <Router />
      </Suspense>
    </AppContainer>
  );
}
