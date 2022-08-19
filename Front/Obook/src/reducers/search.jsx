import { SET_SEARCH, SET_SELECTED_FILTER } from "../actions/books";
import {SET_BOOKS} from "../actions/books";


// initialstate : search vide et librairie API à affichier vide
export const initialState = {
    searchValue: '',
    booksData:[
      // à insert : un fichier json d'un livre pour tester la mise en page sans requête.
    ],
    selectedSearchFilter: 'all'
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
              booksData: action.payload,
          }
        case SET_SELECTED_FILTER:
          return{
            ...state,
            selectedSearchFilter: action.payload,
          }
      default:
        return state;
    }
  };
  
  export default reducer;