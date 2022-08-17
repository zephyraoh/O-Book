import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import authMiddleware from '../middlewares/auth';
import searchMiddleware from '../middlewares/search'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(authMiddleware, searchMiddleware),
  );
  
  const store = createStore(reducer, enhancers);
  
  export default store;