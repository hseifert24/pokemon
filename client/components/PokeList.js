/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */
/* eslint-disable no-debugger, no-restricted-syntax */

import React from 'react';

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  render() {
    return (
      <div>
        <h1>Pokemon Creator</h1>
      </div>
    );
  }
}

export default PokeList;
