import { SET_SEARCH } from "../store/actions";
import {SET_BOOKS} from "../store/actions";


// initialstate : search vide et librairie API à affichier vide
export const initialState = {
    searchValue: '',
    booksData:[
      // à insert : un fichier json d'un livre pour tester la mise en page sans requête.
    ],
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
      default:
        return state;
    }
  };
  
  export default reducer;