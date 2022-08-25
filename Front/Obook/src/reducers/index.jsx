import { combineReducers } from 'redux';

import userReducer from './user';
import booksReducer from './books';
import visitedProfileReducer from './visitedProfile';


const rootReducer = combineReducers({
    books: booksReducer,
    user: userReducer,
    visitedProfile: visitedProfileReducer,
  });

export default rootReducer;