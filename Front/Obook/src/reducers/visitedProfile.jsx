import { SET_VISITED_PROFILE_DATA } from "../actions/visitedUser";

export const initialstate = {
    profile: {
        username: '',  
        email: '',
        profile_picture:'',
        zipcode:'',
        localisation:'',
        biography:'',
        tel:'',
        books: [],
    },
};

const reducer = (state = initialstate, action = {}) => {
    switch(action.type){
        case SET_VISITED_PROFILE_DATA:
            return{
                ...state,
                ...action.payload
            }
        
        default:
            return state;
    }
};

export default reducer;