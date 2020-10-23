const INITIAL_STATE = { category: null };

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return  action.config ;
    default:
      return state;
  }
};

export default configReducer;
