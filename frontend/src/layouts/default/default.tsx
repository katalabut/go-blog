import React from 'react';

import Header from './header';
import Footer from './footer';

const Default: React.FC = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Default;
