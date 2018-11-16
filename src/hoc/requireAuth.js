
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as routes from '../routePaths';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if(!this.props.authenticated) {
        this.props.history.push(routes.toHome)
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.props.history.push(routes.toHome);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.authenticated };
  };

  return connect(mapStateToProps)( withRouter(Authentication) );
};
