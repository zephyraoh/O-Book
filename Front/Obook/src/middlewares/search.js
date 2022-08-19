import { GET_BOOKS, setBooks } from '../actions/books';
import { axiosBooksApi } from '../utils/axios';


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
      
      // searchValue = 'flowers+inauthor:keyes&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fg'
      const { data } = await axiosBooksApi.get(`${searchURL}&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fg`);
      console.log("middleware data ", data)
      store.dispatch(setBooks(data));
      break;
    }
    default:
      next(action);
      break;
  }
};

export default searchMiddleware;

// recherche globale = 'https://www.googleapis.com/books/v1/volumes?q={recherche}'
// recherche par titre = 'https://www.googleapis.com/books/v1/volumes?q=intitle:{recherche}'
// recherche par auteur = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:{recherche}'
// recherche par genre = 'https://www.googleapis.com/books/v1/volumes?q=subject:{recherche}'