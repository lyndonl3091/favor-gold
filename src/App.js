import React, { Component } from 'react'
import {
  SplashWrapper,
  FlexWrapper
} from 'styles'
import { ColumnFlexWrapper } from './styles';
import { Paper } from '@material-ui/core'
import { toSignUp } from 'routes'
import Button from 'components/common/Button'

const pageStyle = {
  height: '100%',
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  padding: '10px',
};

export class App extends Component {

  componentDidMount() {
    console.log('Get all favors')
  }

  render() {
    return (
      <ColumnFlexWrapper>
        <FlexWrapper>
          <Paper style={pageStyle} zDepth={5}>
            <h1>What's yout favor?</h1>
          </Paper>
        </FlexWrapper>

        <FlexWrapper>
          <h2>List of favors...</h2>

        </FlexWrapper>
    </ColumnFlexWrapper>

    )
  }


}

export default App;
