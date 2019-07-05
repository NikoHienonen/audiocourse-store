import React from 'react';

const NoMatch = ({ location }) => (
  <div className="content">
    <h1>404</h1>
    <h3><code>{location.pathname}</code> was not found</h3>
  </div>
)

export default NoMatch;