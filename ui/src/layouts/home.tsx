import React from 'react';

export const Home: React.FC = ({ children }) => {
  return (
    <div className="app">
      <header>menu</header>
      <main>{children}</main>
    </div>
  );
};
