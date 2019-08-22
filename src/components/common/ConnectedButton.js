import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const ConnectedButton = ({
    children,
    color = 'default',
    route = '/',
    variant ='contained',
    style = { color: 'white' },
  }) => (
  
    <Link to={route}>
      <Button
        variant={variant}
        color={color}
        style={style}
       > 
        {children}
      </Button>
    </Link>
  )
  
  ConnectedButton.propTypes = {
    route: PropTypes.string.isRequired,
  }
  
  export default ConnectedButton
  