import React, { Component } from 'react';
import * as actions from '../../actions';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// class Signin extends Component {
//
//   handleFormSubmit({ email, password}) {
//     this.props.singinUser({ email, password });
//   }
//
//   render() {
//     const { handleSubmit, fields: { email, password}} = this.props;
//
//     return (
//         <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
//           <fieldset className="form-group">
//             <label>Email:</label>
//             <input {...email} className="form-control" />
//           </fieldset>
//           <fieldset className="form-group">
//             <label>Password:</label>
//             <input {...password} className="form-control" />
//           </fieldset>
//           <button action="submit" className="btn btn-primary">Sign In</button>
//         </form>
//     )
//   }
// }
//
// export default reduxForm({
//   form: 'signin',
//   fields: ['email', 'password']
// }, null, actions)(Signin)

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ username: e.target.value});
  }

  render() {
    <div>
      <form onSubmite=>
        <FormGroup>
          <ControlLabel> Sign up for an account</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    </div>
  }
};

export default Signin;
