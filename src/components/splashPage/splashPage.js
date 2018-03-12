import React from 'react';
import Paper from 'material-ui/Paper';

import Button from '../common/Button';


const pageStyle = {
  height: '100%',
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  padding: '10px',
};

const SplashPage = (props) => (
  <div>
    <Paper style={pageStyle} zDepth={5}>
      <h4>Hello</h4>
      <Button />
    </Paper>
  </div>
)

export default SplashPage;
