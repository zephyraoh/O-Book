import { GET_BOOKS, setBooks } from '../actions/books';
import { axiosBooksApi } from '../utils/axios';

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case GET_BOOKS: {
      const {search: {searchValue, selectedSearchFilter}} = store.getState();
      let searchURL = '';

      switch(selectedSearchFilter){
        case "title":{
          searchURL = `intitle:${searchValue}`;
          break;
        }
        case "author":{
          searchURL= `inauthor:${searchValue}`;
          break;
        }
        case "genre":{
         searchURL= `insubject:${searchValue}`;
         break;
        }
        default:{
          searchURL = searchValue
        }
      }
      
      const { data } = await axiosBooksApi.get(`${searchURL}&key=${apiKey}`);
      console.log("middleware data", data)
      store.dispatch(setBooks(data));
      break;
    }
    default:
      next(action);
      break;
  }
};

export default searchMiddleware;
