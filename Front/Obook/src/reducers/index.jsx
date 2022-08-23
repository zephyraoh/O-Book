import { combineReducers } from 'redux';

import userReducer from './user';
import searchReducer from './search';
import visitedProfileReducer from './visitedProfile';


const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
    visitedProfile: visitedProfileReducer,
  });

export default rootReducer;