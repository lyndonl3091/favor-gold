import React, { Component } from 'react'
import { SplashWrapper } from 'styles'
import { Paper } from '@material-ui/core'
import { toSignUp } from 'routes'
import Button from 'components/common/Button'

// import SplashPage from './components/SplashPage/SplashPage';
// import Aux from './hoc/Aux';

const pageStyle = {
  height: '100%',
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  padding: '10px',
};

export class App extends Component {

  render() {


    return (
      <SplashWrapper>
        <Paper style={pageStyle} zDepth={5}>
          <h4>What's your favor?</h4>
          <Button
            route={toSignUp}
            label="Sign Up/Log In"
          />
        </Paper>
    </SplashWrapper>
       
    )
  }


}

export default App;
