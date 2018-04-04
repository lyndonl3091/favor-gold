import React, { Component } from 'react';

import SplashPage from './components/SplashPage/SplashPage';
import Aux from './hoc/Aux';
import Nav from './components/common/Navbar';

export class App extends Component {

  render() {


    return (
      <Aux>
        <Nav />
        <SplashPage />
      </Aux>
    )
  }


}

export default App;
