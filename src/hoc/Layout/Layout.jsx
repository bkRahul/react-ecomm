import React from 'react';
import { Header } from '../../components/Header/Header';

export const Layout = ({ isAuth, children }) => {
  return (
    <div className="App">
      <Header isAuth={isAuth} />
      <main>{children}</main>
    </div>
  );
};
