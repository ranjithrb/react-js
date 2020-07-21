import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

function ReactHelmet({ children }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My title</title>
      {children}
    </Helmet>
  );
}

ReactHelmet.propTypes = {
  children: PropTypes.node,
};

ReactHelmet.defaultProps = {
  children: null,
};

export default ReactHelmet;
