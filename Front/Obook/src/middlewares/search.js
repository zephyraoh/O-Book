import axios from 'axios';
import { GET_BOOKS, setBooks } from '../actions';



const api = (store) => (next) => async (action) => {

  switch (action.type) {
    case GET_BOOKS: {
      console.log('in the middleware');
      const { data } = await axios.get('flowers+inauthor:keyes&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fgs');
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

export default api;