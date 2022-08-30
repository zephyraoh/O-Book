import { SET_BOOKS_RESULTS_IN_SEARCH_STATE, SET_SEARCH, SET_SELECTED_FILTER, SET_MY_BOOKS_AVAILABILITY, SET_UPDATES, SET_MY_LIBRARY_FILTER, SET_BOOKS } from "../actions/books";


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
      visitedProfileBooks:[],
    },
    libraryFilter:"allMyBooks",
    selectedSearchFilter: 'all',
    updates:[],
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
        case SET_SELECTED_FILTER:
          return{
            ...state,
            selectedSearchFilter: action.payload,
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
              myBooks: state.booksData.myBooks.map(book => {
                if(book.libraryid === action.payload.libraryid) {
                  book.is_available = action.payload.is_available;
                }
                return book
              })
            }
          }
          case SET_UPDATES:
            return{
              ...state,
              updates: action.payload,
            }
      default:
        return state;
    }
  };
  
  export default reducer;