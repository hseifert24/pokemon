/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */
/* eslint-disable no-debugger, no-restricted-syntax */

import React from 'react';

class PokemonCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { types: [] };
    this.create = this.create.bind(this);
  }

  create() {
    const name = this.refs.name.value;
    const image = this.refs.image.value;
    const body = JSON.stringify({ name, image });
    debugger;
    fetch('//localhost:3333/api/pokemon', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => {
      // this.setState({ types: j.types.sections });
    });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Creator</h1>
        <div className='form-group'>
          <label>Name</label>
          <input className='form-control' ref='name' type='text' />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <input className='form-control' ref='image' type='text' />
        </div>
        <button className='btn btn-primary' onClick={this.create}>Add</button>
      </div>
    );
  }
}

export default PokemonCreator;
