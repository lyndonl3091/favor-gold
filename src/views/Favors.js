import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { get, getIn } from 'immutable'

import * as actions from 'actions'

const mapStateToProps = state => ({
  favors: state.getIn(['favors', 'listOfFavors']) &&
    state.getIn(['favors', 'listOfFavors']).toJS() ?
    state.getIn(['favors', 'listOfFavors']).toJS() : []
})

const mapDispatchToProps = dispatch => {
  return {
    getFavors: () => dispatch(actions.actions.getFavors.try())
  }
}

export const Favors = ({
  favors,
  getFavors
}) => {

  const [listOfFavors, setFavors] = useState([])

  useEffect(() => {
    
  }, favors)
}
