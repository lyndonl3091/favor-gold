import React from 'react'
import {
  AppBar,
  Toolbar,
  // Typography,
  IconButton,
} from '@material-ui/core'
import Button from 'components/common/Button'
import MenuIcon from '@material-ui/icons/Menu'
import { toHome, toLogin, toSignUp } from 'routes'



const Bar = () => (
    <>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" route={toHome}>Home</Button>
          <Button color="inherit" route={toSignUp}>Log In/Sign Up</Button>
        </Toolbar>
        </AppBar>
    </>
)

export default Bar