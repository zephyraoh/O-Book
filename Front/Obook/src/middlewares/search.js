import { SEARCH_BOOKS, FETCH_BOOKS, setBooksResultsInSearchState } from '../actions/books';
import { ISBNApiGetBooks, ISBNApiSearchBar } from '../utils/axios';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case SEARCH_BOOKS: {
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
      const { user: { library: {books} }} = store.getState();

      console.log(books);
            // const {search: {searchValue, selectedSearchFilter}} = store.getState();
            // / const myBooks = useSelector((state => state.user.library.books))
      console.log('Looking for something');

      const booksArray = books.map(book => (book.isbn));
      
      console.log("booksArray", booksArray)

      const options = {
        method: 'POST',
        url: 'https://api2.isbndb.com/books/',
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json'
        },
        data: `data: isbns=${[...booksArray]}`
      }
      const {data} = await axios.request(options);
      
      store.dispatch(setBooksResultsInSearchState("myBooks", data))
      console.log('on a dispatché l\'action setBooksResultsInSearchState')
    }
    default:
      next(action);
      break;
  }
};

export default searchMiddleware;
