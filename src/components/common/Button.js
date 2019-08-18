import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const dfButton = ({
  children,
  color = 'default',
  route = '/',
  label,
  style = { color: 'white' },
}) => (

  <Link to={route}>
    <Button color={color} label={label ? label : null} style={style}> 
      {children}
    </Button>
  </Link>
)

Button.propTypes = {
  route: PropTypes.string.isRequired,
}

export default dfButton;
