import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import RaisedButton from 'material-ui/RaisedButton'
import { Button } from '@material-ui/core'

const dfButton = ({
  children,
  color,
  route = '/',
  label
}) => (

  <Link to={route}>
    <Button color={color} label={label ? label : null} style={{ color: 'white'}}> 
      {children}
    </Button>
  </Link>
)

Button.propTypes = {
  route: PropTypes.string.isRequired,
}

export default dfButton;
