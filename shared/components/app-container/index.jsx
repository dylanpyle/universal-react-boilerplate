import React, { PropTypes } from 'react';

import Loader from '../loader';

function AppContainer(props) {
  return (
    <div className='app-container'>
      {props.loading && <Loader />}
      {props.children}
    </div>
  );
}

// We don't actually use this, but `async-props` relies on this in order to
// provide the `loading` prop.
AppContainer.loadProps = (params, cb) => cb(null, {});

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired
};

export default AppContainer;

