import actions from './actions';

const fetchConfig = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/config.json`,
  );
  const json = await response.json();
  return json;
};

export const getConfig = () => async (dispatch) => {
  const response = await fetchConfig();
  dispatch(actions.setConfig(response));

};
