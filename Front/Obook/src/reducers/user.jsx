import { SET_USER_FIELD, SET_USER_DATA, LOGOUT }  from "../actions/user";


export const initialState = {
  username: null,  
  token: null,
  isLogged: false,
  email: '',
  password: '',
  newUserName:'',
  newEmail: '',
  newPassword: '',
  newPasswordConfirm:'',
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_USER_FIELD:
      return{
        ...state,
        //action modulable qui s'appliquera aux deux champs email et password , tl-dr champ contrôlé
        [action.name]: action.value,
      }
      case SET_USER_DATA:
        //inscriptions des données user dans le state post submit
        return{
          ...state,
          ...action.data,
        }

      case LOGOUT:
          return{
            ...state,
            logged: false,
            pseudo: null,
            token: null,
            // email: '',
            // password:'',
          };

      default:
        return state;
    }
  };
  
  export default reducer;
  