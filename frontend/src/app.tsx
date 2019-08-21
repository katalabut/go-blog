import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LayoutRoute, Default } from './layouts';
import { Home } from './pages';
import './scss/style.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <LayoutRoute path="/" layout={Default} component={Home} exact={true} />
      </Switch>
    </Router>
  );
};

export default App;
