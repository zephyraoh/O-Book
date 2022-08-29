import { SEARCH_BOOKS, FETCH_BOOKS, setBooksResultsInSearchState } from '../actions/books';
import { ISBNApiGetBooks, ISBNApiSearchBar } from '../utils/axios';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case SEARCH_BOOKS: {
      console.log('Looking for something');
      const {search: {searchValue, selectedSearchFilter}} = store.getState();

      // ----------RECHERCHE PAR NOM (CI-DESSOUS) OK--------------------------- //
      // --------- RESTE À INTÉGRER FILTRES DE RECHERCHE -------- //
      const { data } = await ISBNApiSearchBar.get(searchValue);


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
      
      console.log("middleware data", data)
      store.dispatch(setBooks(data));
      break;
    }
    case FETCH_BOOKS: {
      const { user: { library: {books} }} = store.getState();
      //! A FAIRE : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS
      // console.log("LE BOOKS LOG ==>", books);
            // const {search: {searchValue, selectedSearchFilter}} = store.getState();
            // / const myBooks = useSelector((state => state.user.library.books))
      // console.log('Fetching books');

      const booksArray = books.map(book => (book.isbn));
      
      // console.log("booksArray", booksArray)

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

      // data tableau de book avec book[0].isbn = books[0].isbn
      // books tableau d'id +isbn
      
      // const correctedFinalBook = data.find(book=>(for(originalBook in books ) => (book.isbn===books.isbn))
      // data.forEach((result)=>{
      //         Object.assign(item, {
      //             id: books.find((o))
      //         })
      // })
      const booksPreApi = books;
      const booksPostApi = data.data;
      const justineBooks = [];
      // console.log('test des valeurs de test', booksPreApi, booksPostApi)
      booksPreApi.forEach(bookAPI => {
        booksPostApi.forEach(bookISBN => {
          if(bookAPI.isbn === bookISBN.isbn) {
            justineBooks.push({...bookAPI, ...bookISBN})
          }
        })
      })
      console.log("JUSTINE BOOKS", justineBooks);
      



      store.dispatch(setBooksResultsInSearchState("myBooks", justineBooks))
      // console.log('on a dispatché l\'action setBooksResultsInSearchState')


      // TEST A VERIFIER
  //     const mergeById = (books, data) =>
  //     books.map(book => ({
  //       ...data.find((item) => (item.isbn === book.isbn) && item),
  //       ...book
  //   }));

  // console.log(mergeById(books, data));
  break;
    }
    default:
      next(action);
      break;

  };
}
export default searchMiddleware;
