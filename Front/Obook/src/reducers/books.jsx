import { SET_BOOKS_RESULTS_IN_SEARCH_STATE, SET_SEARCH, SET_SELECTED_FILTER, SET_MY_BOOKS_AVAILABILITY, SET_UPDATES, SET_MY_LIBRARY_FILTER, SET_BOOKS, SET_VISITED_BOOK_PAGE, SET_SINGLE_BOOK, SET_LOADING, SET_BOOK_OWNERS, SET_LENDER_INFOS, UNSET_BOOK, SET_NEW_BOOK_STATUS } from "../actions/books";


// initialstate : search vide et librairie API à affichier vide
export const initialState = {
    searchValue: '',
    booksData:{
      searchedBooks:[],
      myBooks:{
        books:[],
        lends:[],
        borrow:[],
      },
    },
    visitedBookPage: {},
    bookOwners: [],
    libraryFilter:"allMyBooks",
    selectedSearchFilter: 'all',
    updates:[],
    loading: true,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_MY_LIBRARY_FILTER:
          return{
            ...state,
            libraryFilter: action.payload,
          }
        case SET_SEARCH:
            return{
              //retour du nouveau state chargé de la valeur du champ de recherche
                ...state,
                searchValue: action.payload,
            }
        case SET_BOOKS:
          return{
            //retour du nouveau state chargé de la valeur de la librairie requêtée 
            ...state,
            booksData: {
              ...state.booksData,
              searchedBooks : action.payload,
          }
        }
        case SET_SINGLE_BOOK:
          return{
            ...state,
            visitedBookPage: action.payload,
        }
        case SET_SELECTED_FILTER:
          return{
            ...state,
            selectedSearchFilter: action.payload,
          }
          case SET_VISITED_BOOK_PAGE:
            return{
                ...state,
                visitedBookPage: action.payload,
                }
        case SET_BOOKS_RESULTS_IN_SEARCH_STATE:
          return{
            ...state,
            booksData: {
              ...state.booksData,
              [action.name]: action.bookData,
              // searchedBooks: [...action.bookData.data],
          }}
          
          case SET_MY_BOOKS_AVAILABILITY:
          console.log("SET MY BOOKS AVAILABILITY", action);
          // -------- TESTS EN COURS ------------- //
          // const bookToModify = state.booksData.myBooks.find(book=>book.libraryid === action.payload.libraryid);
          // bookToModify.is_available = action.payload.is_available;
          // const index = state.booksData.myBooks.indexOf(state.booksData.myBooks.find(book=>book.libraryid === action.payload.libraryid));
          // console.log(index)
          // console.log(bookToModify)
          return{
            ...state,
            booksData: {
              ...state.booksData,
              myBooks: {
                ...state.booksData.myBooks,
                books: state.booksData.myBooks.books.map(book => {
                if(book.libraryid === action.payload.libraryid) {
                  book.is_available = action.payload.is_available;
                }
                return book
                }),
                borrow: state.booksData.myBooks.borrow.map(book => {
                  if(book.libraryid === action.payload.libraryid) {
                    book.is_available = action.payload.is_available;
                  }
                  return book
                }),
                lends: state.booksData.myBooks.lends.map(book => {
                  if(book.libraryid === action.payload.libraryid) {
                    book.is_available = action.payload.is_available;
                  }
                  return book
                }),
              }

              }
              }
        case SET_UPDATES:
            return{
              ...state,
              updates: action.payload,
            }
        case SET_LOADING:
            return{
              ...state,
              loading: action.payload,
            }
        case SET_BOOK_OWNERS:
            return{
              ...state,
              bookOwners: action.payload,
            }
        case SET_LENDER_INFOS:
          return{
            ...state,
            lenderUserInfos: action.payload,
          }
          case UNSET_BOOK:
            return{
              ...state,
              booksData: {
                ...state.booksData,
                myBooks: {
                  ...state.booksData.myBooks,
                  books: state.booksData.myBooks.books.filter(book => book.libraryid !== action.payload),
                }
            }
            }
          case SET_NEW_BOOK_STATUS:
            console.log('STATUS ===>',action.status);
            console.log('LIBRARYID ===>', action.libraryid);

             const newLends = state.booksData.myBooks.lends.map(book => {
                if(book.libraryid === Number(action.libraryid)){
                  if(action.status === 'En cours'){
                    book.status = 'Terminé';
                    return book
                  } else if(action.status === 'En attente de validation'){
                    book.status = 'En cours';
                    return book
                  }
                } else {
                    return book
              }});
              console.log('NEW LENDS ===>', newLends);
            return{
              ...state,
              booksData: {
                ...state.booksData,
                myBooks: {
                  ...state.booksData.myBooks,
                  lends: newLends,
              }
            }
            }
        default:
          return state;
    }
  };
  
  export default reducer;

 