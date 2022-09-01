import { SEARCH_BOOKS, FETCH_BOOKS, FETCH_UPDATES, setBooksResultsInSearchState, FETCH_LATEST_BOOKS, setBooks, setUpdates, GET_ONE_BOOK_DETAILS, setVisitedBookPage } from '../actions/books';
import { ISBNApiSearchBar, axiosServerDB } from '../utils/axios';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { FETCH_VISITED_PROFILE_DATA, setVisitedProfileData } from '../actions/visitedUser';


const apiKey = import.meta.env.VITE_ISBN_API_KEY;

const searchMiddleware = (store) => (next) => async (action) => {

  switch (action.type) {
    case SEARCH_BOOKS: {

      const {books : {searchValue, selectedSearchFilter}} = store.getState();
      let searchURL = '';

      switch(selectedSearchFilter){
        case "title":{
          searchURL = `/books/${searchValue}?&column=title`;
          break;
        }
        case "author":{
          searchURL= `/books/${searchValue}?&column=author`;
          break;
        }
        case "ISBN": {
          searchURL= `/book/${searchValue}`;
          break;
        }
        default:{
          searchURL = `/books/${searchValue}?`;
        }
      }
      const { data } = await ISBNApiSearchBar.get(searchURL);
        console.log("middleware data", data)
        store.dispatch(setBooks(data));
        break;
      
    }
    // case FETCH_VISITED_PROFILE_BOOKS:{
    //   try{
		// 		const { data } = await axiosServerDB.get('/mylibrary')
		// 	console.log("receiving profile data !!!>>>", data);
		// }catch(error){
		// 	console.log('error getting profile >>>', error);
		// }
      
    //   const booksArray = books.map(book => (book.isbn));
      
    //   const options = {
    //     method: 'POST',
    //     url: 'https://api2.isbndb.com/books/',
    //     headers: {
    //       Authorization: apiKey,
    //       'Content-Type': 'application/json'
    //     },
    //     data: `data: isbns=${[...booksArray]}`
    //   }
    //   const {data} = await axios.request(options);

    //   const booksPreApi = books;
    //   const booksPostApi = data.data;
    //   const justineBooks = [];
    //   booksPreApi.forEach(bookAPI => {
    //     booksPostApi.forEach(bookISBN => {
    //       if(bookAPI.isbn === bookISBN.isbn) {
    //         justineBooks.push({...bookAPI, ...bookISBN})
    //       }
    //     })
    //   })
  
    //   store.dispatch(setBooksResultsInSearchState("myBooks", justineBooks))
    // }
    case FETCH_BOOKS: {
//! old working code
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
//! old working code above

      // //! TENTATIVE EN COURS : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS
      const { user: { library }} = store.getState();
      const finalArray = [...library.books.map((el=>el.isbn)), ...library.borrow.map(el=>el.isbn)
        , ...library.lends.map(el=>el.isbn) 
      ];
      
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

      const superJustineBooks = {};
      
      for (const bookSection in library){
        const results = [];

            console.log(bookSection, library[bookSection]);

            library[bookSection].forEach( bookAPI =>{

              superBooksPostApi.forEach(bookISBN => {
                  if(bookAPI.isbn === bookISBN.isbn) {
                    results.push({...bookAPI, ...bookISBN})
                  }
               })
            }); superJustineBooks[bookSection] = results; 
          }
          // oneLastArray = {
          //   ...superJustineBooks,
          //   {}
          // }
  
        console.log("FINAL method superJustineBooks ==>", superJustineBooks)
        store.dispatch(setBooksResultsInSearchState("myBooks", superJustineBooks))
      
      // //! A FAIRE : tout simplement in for in englobant l'algo de justine for (object in library){ object.foreach etc etc}
      // //! TENTATIVE EN COURS : GENERALISER LA FONCTION AVEC LA REQUETE DE LIBRARY PLUS QUE DE BOOKS
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
    case FETCH_UPDATES: {
      // requête au back pour récupérer la liste des updates
      const response = await axiosServerDB.get('/loans');
      // on stocke la liste
      const latestLoans = response.data;
      // on crée un tableau vide qui recevra les infos complètes
      const updates = [];

      // on boucle sur chaque entrée de la table emprunt afin de récupérer les infos du "lender" (côté) et les infos sur le livre
      for (const loan of latestLoans) {
        const lenderInfos = await axiosServerDB.get(`library/${loan.libraryid}`);

        const options = {
          method: 'POST',
          url: 'https://api2.isbndb.com/books/',
          headers: {
            Authorization: apiKey,
            'Content-Type': 'application/json'
          },
          data: `data: isbns=${loan.isbn}`
        }

        const ISBNresponse = await axios.request(options);
        const ISBNdata = ISBNresponse.data.data[0];
        updates.push({...loan, ...lenderInfos.data, ...ISBNdata})
      }
      store.dispatch(setUpdates(updates));
      break;
    }
    case GET_ONE_BOOK_DETAILS: {
      const isbn = action.payload;
      const searchURL= `/book/${isbn}`;
      const { data } = await ISBNApiSearchBar.get(searchURL);
      store.dispatch(setVisitedBookPage(data.book));
      break;
    }
    case FETCH_VISITED_PROFILE_DATA: {
      try{
        const username = action.payload;
        console.log(username)
				const { data } = await axiosServerDB.get(`/visitedlibrary/${username}`);
			  console.log("receiving visited profile data !!!>>>", data);
		  }catch(error){
			console.log('error getting visited profile >>>', error);
		  }
      store.dispatch(setVisitedProfileData(data));
      break;
    }
    default:
      next(action);
      break;

  };
}
export default searchMiddleware;
