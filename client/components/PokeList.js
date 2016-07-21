/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */
/* eslint-disable no-debugger, no-restricted-syntax */

import React from 'react';

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentWillMount() {
    fetch('//localhost:3333/api/pokemon')
    .then(r => r.json())
    .then(j => {
      this.setState({ list: j.pokemon });
    });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Creator</h1>
        <div className='form-group'>
          <ul>
            {this.state.list.map((v, i) => <li key={i}>{v.name} <img alt="" width="100" src={v.image} /></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokeList;
