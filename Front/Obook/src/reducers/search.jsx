import { SET_SEARCH } from "../store/actions";

export const initialState = {
    searchValue: '',
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SEARCH:
            return{
                ...state,
                searchValue: action.payload,
            }
      default:
        return state;
    }
  };
  
  export default reducer;