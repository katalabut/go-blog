import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LayoutRoute, Default } from './layouts';
import './scss/style.scss';

const HomePage: React.FC = () => {
  return <div>Home</div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <LayoutRoute
          path="/"
          layout={Default}
          component={HomePage}
          exact={true}
        />
      </Switch>
    </Router>
  );
};

export default App;
