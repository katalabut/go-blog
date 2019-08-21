import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = ({ children }) => {
  return (
    <footer className="footer">
      <div className="has-text-centered">
        by <strong>Spoty</strong>
      </div>
    </footer>
  );
};

export default Footer;
