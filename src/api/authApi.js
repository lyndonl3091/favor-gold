import axios from 'axios';

export const signUp = user => {
  axios.post('/signup', user)
};
