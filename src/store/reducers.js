import { combineReducers } from 'redux';
import loginReducer from './login/index';
import articleReducer from './article/index';
// import serviceReducer from './service/index';
// import typeDocReducer from './type_documents/index';
// import statusReducer from './request/index';
const rootReducer = combineReducers({
  user: loginReducer,
  article: articleReducer,
  // service : serviceReducer,
  // typeDocument:typeDocReducer,
  // docStatus:statusReducer
});

export default rootReducer;
