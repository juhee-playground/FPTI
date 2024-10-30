import { Suspense } from 'react';

import { AppContainer } from './AppContainer.styles';

import Router from '@/_rm_src/router';

export default function Layout() {
  return (
    <AppContainer>
      <Suspense>
        <Router />
      </Suspense>
    </AppContainer>
  );
}
