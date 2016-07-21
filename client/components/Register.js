/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */
/* eslint-disable no-debugger, no-restricted-syntax, react/sort-comp */

import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
    this.register = this.register.bind(this);
  }

  register() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const body = JSON.stringify({ email, password });
    fetch('/api/register', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((j) => {
      console.log('JOE JOE JOE JOE ');
      this.setState({ token: j.token });
    });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Trainer Registration</h1>
        <div className='form-group'>
          <label>Email</label>
          <input className='form-control' ref='email' type='text' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input className='form-control' ref='password' type='password' />
        </div>
        <button className='btn btn-primary' onClick={this.register}>Add</button>
        <hr />
      </div>
    );
  }
}

export default Register;
