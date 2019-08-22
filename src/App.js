import React, { Component } from 'react'
import {
  FlexWrapper
} from 'styles'
import { ColumnFlexWrapper } from './styles';
import { Paper } from '@material-ui/core'
import {
  // toSignUp,
  toAddFavor
} from 'routes'
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
          <Paper style={pageStyle}>
            <h1>What's yout favor?</h1>
            <Button
              route={toAddFavor}
              label="Add Favor"
            />
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
