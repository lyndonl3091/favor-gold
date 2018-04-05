import * as types from './types';
import { signUp } from '../api/authApi';

export const signUpUser = (user) => {
  return function(dispatch) {
    signUp(user)
      .then(response => {
        console.log('res: ', response);
      })
      .catch(() => {
        
      })
  }

}
