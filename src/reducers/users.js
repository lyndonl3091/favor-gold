import * as types from '../actions/types';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_START:
      return {}
    default:
      return state;
  }
}
