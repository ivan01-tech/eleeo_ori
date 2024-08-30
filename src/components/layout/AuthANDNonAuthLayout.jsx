// AuthLayout.js
import React from 'react';
import Header from '../Header';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

export  const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <TopMenu />
      <div className="content">
        {children}
      </div>
      <Footer />
    </>
  );
};



export const NonAuthLayout = ({ children }) => {
  return (
    <>
        {children}
    </>
  );
};

