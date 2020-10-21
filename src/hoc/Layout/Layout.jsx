import React from 'react';
import Header from '../../components/Header/Header';

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
    </div>
  );
};
