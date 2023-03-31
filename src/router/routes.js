import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './views/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
