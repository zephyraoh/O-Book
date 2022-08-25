import { GET_BOOKS, setBooks } from '../actions/books';
import { ISBNApiGetBooks, ISBNApiSearchBar } from '../utils/axios';

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

// ----------- TESTS ---------- //
// const data = ['0452284236', '2724289145', '0151010269' ];
// const json = JSON.stringify(data);
// const post_data = {json_data: json};
const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case GET_BOOKS: {
      console.log('Looking for something');
      // const {search: {searchValue, selectedSearchFilter}} = store.getState();

      // ----------RECHERCHE PAR NOM (CI-DESSOUS) OK--------------------------- //
      // --------- RESTE À INTÉGRER FILTRES DE RECHERCHE -------- //
      // const { data } = await ISBNApiSearchBar.get(searchValue);


      // ----------RECHERCHE PAR ISBNS EN COURS----------------- //
      // const dataJSON = JSON.stringify({data: 'isbns=0452284236,2266154117,2842281500'});
      // ----------- TESTS ---------- //
      const response = await ISBNApiGetBooks.post('/books', {data: 'isbns=0452284236,2266154117,2842281500'});
      console.log(response);

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
    default:
      next(action);
      break;
  }
};

export default searchMiddleware;
