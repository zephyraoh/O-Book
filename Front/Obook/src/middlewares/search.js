import { GET_BOOKS, setBooks } from '../actions/books';
import { ISBNApiGetBooks, ISBNApiSearchBar } from '../utils/axios';
import axios from 'axios';


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case GET_BOOKS: {
      console.log('Looking for something');
      // const {search: {searchValue, selectedSearchFilter}} = store.getState();

      // ----------RECHERCHE PAR NOM (CI-DESSOUS) OK--------------------------- //
      // --------- RESTE À INTÉGRER FILTRES DE RECHERCHE -------- //
      // const { data } = await ISBNApiSearchBar.get(searchValue);

      const options = {
        method: 'POST',
        url: 'https://api2.isbndb.com/books/',
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json'
        },
        data: `data: isbns=2724289145,2266154117,`
      };

      const {data} = await axios.request(options);
      console.log(data);

      // ----------- FILTRES DE RECHERCHE VERSION GOOGLE API ---------- //
      // let searchURL = '';

      // switch(selectedSearchFilter){
      //   case "title":{
      //     searchURL = `intitle:${searchValue}`;
      //     break;
      //   }
      //   case "author":{
      //     searchURL= `inauthor:${searchValue}`;
      //     break;
      //   }
      //   case "genre":{
      //    searchURL= `insubject:${searchValue}`;
      //    break;
      //   }
      //   default:{
      //     searchURL = searchValue
      //   }
      // }
      
      // const { data } = await axiosBooksApi.get(`${searchURL}&key=${apiKey}`);
      
      // console.log("middleware data", data)
      // store.dispatch(setBooks(data));
      break;
    }
    case FETCH_BOOKS: {
      console.log('Looking for something');
      const options = {
        method: 'POST',
        url: 'https://api2.isbndb.com/books/',
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json'
        },
        data: `data: isbns=2724289145,2266154117,`
      };

      const {data} = await axios.request(options);
      console.log(data);
    }
    default:
      next(action);
      break;
  }
};

export default searchMiddleware;
