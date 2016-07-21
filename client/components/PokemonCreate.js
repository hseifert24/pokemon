/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */
/* eslint-disable no-debugger, no-restricted-syntax, react/sort-comp */

import React from 'react';

class PokemonCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.create = this.create.bind(this);
  }

  create() {
    const name = this.refs.name.value;
    const image = this.refs.image.value;
    const body = JSON.stringify({ name, image });
    debugger;
    fetch('/api/pokemon', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((j) => {
      this.setState({ list: [...this.state.list, j.pokemon] });
    });
  }

  componentWillMount() {
    fetch('/api/pokemon')
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
          <label>Name</label>
          <input className='form-control' ref='name' type='text' />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <input className='form-control' ref='image' type='text' />
        </div>
        <button className='btn btn-primary' onClick={this.create}>Add</button>
        <hr />
        <table className='form-group pokelist'>
          <thead>
            <tr>
              <td colSpan="2">
                Pokémon
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((v, i) => <tr key={i}><td key={i}>{v.name}</td><td><img alt="" width="100" src={v.image} /></td></tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PokemonCreator;
