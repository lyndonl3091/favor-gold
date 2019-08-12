import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

const Button = ({
  children,
  route = '/',
  label
}) => (

  <Link to={route}>
    <RaisedButton label={label ? label : null}> 
      {children}
    </RaisedButton>
  </Link>
)

Button.propTypes = {
  route: PropTypes.string.isRequired,
}

export default Button;
