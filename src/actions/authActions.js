import * as types from './types';
import { signUp } from '../api/authApi';

export const signUpUser = (user) => {
  return function(dispatch) {
    signUp(user)
      .then(response => {
        // sign user in
      })
      .catch(() => {

      })
  }


export const signinUser = ({ email, password }) => {
  return function(dispatch) {
    signIn(user)
      .then(res => {
        dispatch({ type: types.AUTH_USER})
      })
  }
}
