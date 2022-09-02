import { SET_VISITED_PROFILE_DATA, SET_VISITED_PROFILE_BOOKS, SET_VISITED_PROFILE_BOOK_STATUS } from "../actions/visitedUser";

export const initialstate = {
    books:[],
    tags:[],
    userInfos: {
        biography: '',  
        id: '',
        localisation:'',
        profile_picture:'',
        username:'',
        tel:'',
        zipcode:'',
    },
};

const reducer = (state = initialstate, action = {}) => {
    switch(action.type){
        case SET_VISITED_PROFILE_DATA:
            return{
                ...state,
                ...action.payload
            }
        case SET_VISITED_PROFILE_BOOKS:
            return{
                ...state,
                books: action.payload,
            }
        case SET_VISITED_PROFILE_BOOK_STATUS:
            return{
                ...state,
                books: {

                }
            }
        default:
            return state;
    }
};

export default reducer;