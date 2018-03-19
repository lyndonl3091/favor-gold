import React, { Component } from 'react';
import * as actions from '../../actions';
// import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { TextField, RaisedButton } from 'material-ui';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  };

  inputUsername(username) {
    this.setState({ username })

  };

  inputPassword(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>

          <TextField
            hintText="Username"
            floatingLabelText="Username"
            onChange={e => this.inputUsername(e.target.value)}
          /> <br/>

          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            onChange={e => this.inputPassword(e.target.value)}
          /><br/>

          <RaisedButton
            type="Submit"
            label="Sign Up"
            primary
          />
        </form>
      </div>
    )
  }

};

export default Signin;
