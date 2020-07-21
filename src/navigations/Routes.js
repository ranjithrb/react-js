import PropTypes from 'prop-types';
import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoutes from './route.config/private.routes';
import PublicRoutes from './route.config/public.routes';

const AppRoutes = () => {
  // This will replaced by store selector
  const isLoggedIn = false;

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {PublicRoutes.map(({ component: Component, ...rest }) => (
            <Route {...rest}>
              <Component />
            </Route>
          ))}
          {PrivateRoutes.map((route) => (
            <PrivateRoute isLoggedIn={isLoggedIn} {...route} />
          ))}
          {/* Page not found page must come here */}
        </Switch>
      </Suspense>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
  isLoggedIn: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  component: null,
  isLoggedIn: false,
};

export default AppRoutes;
