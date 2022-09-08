export const SET_VISITED_PROFILE_DATA = 'SET_VISITED_PROFILE_DATA';
export const FETCH_VISITED_PROFILE_DATA = 'FETCH_VISITED_PROFILE_DATA';
export const FETCH_VISITED_PROFILE_BOOKS = 'FETCH_VISITED_PROFILE_BOOKS';
export const SET_VISITED_PROFILE_BOOKS = 'SET_VISITED_PROFILE_BOOKS';
export const FETCH_BORROW_DEMAND = 'FETCH_BORROW_DEMAND';
export const SET_VISITED_PROFILE_BOOK_STATUS = 'SET_VISITED_PROFILE_BOOK_STATUS';


export const setVisitedProfileData = (profileData)=>({
    type : SET_VISITED_PROFILE_DATA,
    payload: profileData,
});

export const fetchVisitedProfileData = (username)=>({
    type : FETCH_VISITED_PROFILE_DATA,
    payload: username,
});

export const fetchVisitedProfileBooks = () => ({
    type: FETCH_VISITED_PROFILE_BOOKS,
});

export const setVisitedProfileBooks = (booksData) => ({
    type: SET_VISITED_PROFILE_BOOKS,
    payload: booksData,
});

export const fetchBorrowDemand = (libraryid)=>({
    type : FETCH_BORROW_DEMAND,
    payload: libraryid,
});

export const setVisitedProfileBookStatus = (libraryid)=>({
    type : SET_VISITED_PROFILE_BOOK_STATUS,
    payload: libraryid,
})