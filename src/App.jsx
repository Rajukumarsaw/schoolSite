import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
}

export default App;
