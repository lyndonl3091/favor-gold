import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { TextField, RaisedButton } from 'material-ui';
// import { string } from 'prop-types'

import { signUpUser } from '../../actions/authActions'

export const SignUp = props => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleUserName = e => {
    const val = e.target.value
    setUserName(val)
  }

  const handleSubmit = () => {
    // dispatch action to submit form

    const params = {
      userName,
      password,
      email
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <TextField
          hintText="Username"
          floatingLabelText="Username"
          onChange={handleUserName}
        /> <br/>

        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          onChange={e => this.inputPassword(e.target.value)}
        /><br/>

        <TextField
          hintText="Email"
          floatingLabelText="Email"
          type="text"
          onChange={e => this.inputEmail(e.target.value)}
        /><br/>

        <TextField
          hintText="First Name"
          floatingLabelText="First Name"
          type="text"
          onChange={e => this.inputFirstName(e.target.value)}
        /><br/>

        <TextField
          hintText="Last Name"
          floatingLabelText="Last Name"
          type="text"
          onChange={e => this.inputLastName(e.target.value)}
        /><br/>

        <RaisedButton
          type="Submit"
          label="Sign Up"
          primary
        />
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    errorMessage: state && state.auth && state.auth.error ?
      state.auth.error : ''
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUpUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
