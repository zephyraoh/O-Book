import { GET_BOOKS, setBooks } from '../actions/books';
import { axiosBooksApi } from '../utils/axios';



const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case GET_BOOKS: {
      const {search: {searchValue}} = store.getState();
      console.log(searchValue)
      // searchValue = 'flowers+inauthor:keyes&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fg'
      const { data } = await axiosBooksApi.get(`${searchValue}&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fg`);
      console.log("middleware data ", data)
      store.dispatch(setBooks(data));
      console.log(data);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default searchMiddleware;