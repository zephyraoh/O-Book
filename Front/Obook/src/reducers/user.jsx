import { SET_USER_FIELD, SET_USER_DATA, LOGOUT }  from "../actions/user";


export const initialState = {
  username: null,  
  token: null,
  isLogged: false,
  email: '',
  password:'',
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_USER_FIELD:
      return{
        ...state,
        //action modulable qui s'appliquera aux deux champs email et password
        [action.name]: action.value,
      }
      case SET_USER_DATA:
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
  