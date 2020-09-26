const INITIAL_STATE = { items: null, load: false };

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ARTICLE_ITEMS':
      return { items: action.items, load: true };

    default:
      return state;
  }
};

export default loginReducer;
