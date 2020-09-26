const user = (user) => ({
  type: 'SET_USER',
  user,
});

const logout = () => ({
  type: 'UNSET_USER',
});

export default {
  user,
  logout,
};
