import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LayoutRoute, Home as HomeLayout } from './layouts';
import { Home } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <LayoutRoute
          path="/"
          layout={HomeLayout}
          component={Home}
          exact={true}
        />
      </Switch>
    </Router>
  );
};

export default App;
