import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import { toLogin } from '../../routePaths';

const Button = (props) => (

  <Link to={toLogin}>
    <RaisedButton label="Hello" />
  </Link>

)

export default Button;
