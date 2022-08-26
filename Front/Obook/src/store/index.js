// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from '../reducers';
// import authMiddleware from '../middlewares/auth';
// import searchMiddleware from '../middlewares/search'; 
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage '

// const persistConfig={
//   key:'main-root',
//   storage,
// }

// const persistedReducer=persistReducer(persistConfig, reducer)

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//     applyMiddleware(authMiddleware, searchMiddleware),
//   );
  
//   const store = createStore(persistedReducer, enhancers);
//   const Persistor= persistStore(store);

//   export {Persistor}
//   export default store;


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