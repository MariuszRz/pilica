import actions from './actions';

const fetchLogin = async (auth) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/auth.php?auth=${auth}`,
    {
      method: 'GET',
    },
  );
  const json = await response.json();
  return json;
};

export const checkLogin = () => async (dispatch) => {
  if (localStorage.getItem('pilica.eu/user')) {
    const userLocal = JSON.parse(localStorage.getItem('pilica.eu/user'));
    const userResponse = await fetchLogin(userLocal.auth);
    if (userResponse.ok) {
      dispatch(actions.user(userResponse.user));
    }
  }
};
