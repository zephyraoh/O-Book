import { SEARCH_BOOKS, FETCH_BOOKS, setBooksResultsInSearchState, FETCH_LATEST_BOOKS, setBooks } from '../actions/books';
import { ISBNApiSearchBar, axiosServerDB } from '../utils/axios';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case SEARCH_BOOKS: {

      const {books : {searchValue, selectedSearchFilter}} = store.getState();
      let searchURL = '';

      switch(selectedSearchFilter){
        case "title":{
          searchURL = `${searchValue}?&column=title`;
          break;
        }
        case "author":{
          searchURL= `${searchValue}?&column=author`;
          break;
        }
        default:{
          searchURL = `${searchValue}?`;
        }
      }

      const { data } = await ISBNApiSearchBar.get(searchURL);
      
      console.log("middleware data", data)
      store.dispatch(setBooks(data));
      break;
    }
    case FETCH_BOOKS: {

      //! TENTATIVE EN COURS : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS
      const { user: { library }} = store.getState();
      const finalArray = [...library.books.map(el=>el.isbn), ...library.borrow.map(el=>el.isbn), ...library.lends.map(el=>el[0].isbn)];
      
      // const options = {
      //   method: 'POST',
      //   url: 'https://api2.isbndb.com/books/',
      //   headers: {
      //     Authorization: apiKey,
      //     'Content-Type': 'application/json'
      //   },
      //   data: `data: isbns=${[...finalArray]}`
      // } 
      // const {data} = await axios.request(options);
      //  const booksPostApi = data.data;
      // const booksPreApi = books;
      // const booksPostApi = data.data;
      // const justineBooks = [];
      // booksPreApi.forEach(bookAPI => {
      //   booksPostApi.forEach(bookISBN => {
      //     if(bookAPI.isbn === bookISBN.isbn) {
      //       justineBooks.push({...bookAPI, ...bookISBN})
      //     }
      //   })
      // })
      //! A FAIRE : tout simplement in for in englobant l'algo de justine for (object in library){ object.foreach etc etc}
      //! TENTATIVE EN COURS : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS


      const { user: { library: {books} }} = store.getState();
      
      // console.log("FINAL TABLO ! ", finalArray);
      const booksArray = books.map(book => (book.isbn));
      
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

      const booksPreApi = books;
      const booksPostApi = data.data;
      const justineBooks = [];
      booksPreApi.forEach(bookAPI => {
        booksPostApi.forEach(bookISBN => {
          if(bookAPI.isbn === bookISBN.isbn) {
            justineBooks.push({...bookAPI, ...bookISBN})
          }
        })
      })
  
      store.dispatch(setBooksResultsInSearchState("myBooks", justineBooks))
  break;
    }
    case FETCH_LATEST_BOOKS: {
      const { data } = await axiosServerDB.get('/books'); 
      store.dispatch(setBooks(data));
      break;
    }
    default:
      next(action);
      break;

  };
}
export default searchMiddleware;
