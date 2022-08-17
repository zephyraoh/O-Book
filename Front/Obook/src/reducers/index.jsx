import { combineReducers } from 'redux';

import userReducer from './user';
import searchReducer from './search'



const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
  });

export default rootReducer;