// import types from './types';

const INITIAL_STATE = {
  id: null,
  login: false,
  date: null,
  email: null,
  logged: false,
  auth: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'UNSET_USER':
      return {
        id: null,
        login: false,
        date: null,
        email: null,
        logged: false,
        auth: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
