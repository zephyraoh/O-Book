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
//! working code
      // const { user: { library: {books} }} = store.getState();
      
      // const booksArray = books.map(book => (book.isbn));
      
      // const options = {
      //   method: 'POST',
      //   url: 'https://api2.isbndb.com/books/',
      //   headers: {
      //     Authorization: apiKey,
      //     'Content-Type': 'application/json'
      //   },
      //   data: `data: isbns=${[...booksArray]}`
      // }
      // const {data} = await axios.request(options);

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
  
      // store.dispatch(setBooksResultsInSearchState("myBooks", justineBooks))
//! working code above

      // //! TENTATIVE EN COURS : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS
      const { user: { library }} = store.getState();
      const finalArray = [...library.books.map((el=>el.isbn)), ...library.borrow.map(el=>el.isbn), ...library.lends.map(el=>el[0].isbn) ];
      
      console.log("FINAL TABLO ! ", finalArray);

      const options2 = {
        method: 'POST',
        url: 'https://api2.isbndb.com/books/',
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json'
        },
        data: `data: isbns=${[...finalArray]}`
      } 
      const {data} = await axios.request(options2);

      console.log(data);

       const superBooksPostApi = data.data;

      const superBooksPreApi = library;

      const superJustineBooks = [];
      
      for (const bookSection in library){
            
            console.log(bookSection, library[bookSection], "librairie", library);

            library[bookSection].forEach(bookISBN=>{
              if(library[bookSection].isbn === bookISBN.isbn) {
                      superJustineBooks.push({...library[bookSection], ...bookISBN})
              
              }
            })}    
        console.log("FINAL method superJustineBooks ==>", superJustineBooks)

      // superBooksPreApi.forEach(bookAPI => {
      //   superBooksPostApi.forEach(bookISBN => {
      //     if(bookAPI.isbn === bookISBN.isbn) {
      //       superJustineBooks.push({...bookAPI, ...bookISBN})
      //     }
      //   })
      // })
      
      // //! A FAIRE : tout simplement in for in englobant l'algo de justine for (object in library){ object.foreach etc etc}
      // //! TENTATIVE EN COURS : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS

  break;
    }
    case FETCH_LATEST_BOOKS: {
      // requête au serveur back pour récupérer la liste des livres récents //
      const response = await axiosServerDB.get('/books');
  
      const booksList = response.data;
      const booksArray = booksList.map(book => (book.isbn));

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
      console.log(data.data)
      const booksISBNAPI = data.data;
      const booksFullInfo = [];
      booksList.forEach(bookAPI => {
        booksISBNAPI.forEach(bookISBN => {
          if(bookAPI.isbn === bookISBN.isbn) {
            booksFullInfo.push({...bookAPI, ...bookISBN})
          }
        })
      })

      store.dispatch(setBooks(booksFullInfo));
      break;
    }
    default:
      next(action);
      break;

  };
}
export default searchMiddleware;
