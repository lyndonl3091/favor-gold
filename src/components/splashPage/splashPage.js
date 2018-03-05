import React from 'react';
import Paper from 'material-ui/Paper';


const pageStyle = {
  height: '40%',
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '5%',
  marginTop: '5%',
};

const SplashPage = (props) => (
  <div>
    <Paper style={pageStyle} zDepth={5}>
      <h4>Hello</h4>
    </Paper>
  </div>
)

export default SplashPage;
