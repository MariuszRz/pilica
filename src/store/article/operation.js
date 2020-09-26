import actions from './actions';

const fetchArticle = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/article/items.php`,
  );
  const json = await response.json();
  return json;
};

export const getArticle = () => async (dispatch) => {
  const response = await fetchArticle();
  if (response.ok) {
    dispatch(actions.articleItems(response.items));
  }
};
