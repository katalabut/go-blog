import React from 'react';

import Header from './header';
import Footer from './footer';

const Default: React.FC = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Default;
