import axios from 'axios';

export const signUp = user => {
  axios.post('/api/users/signup', user)
};
