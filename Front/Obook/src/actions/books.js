export const SET_SEARCH ='SET_SEARCH';
export const GET_BOOKS ='GET_BOOKS';
export const SET_BOOKS ='SET_BOOKS';

export const setSearchField = (search) => ({
    type: SET_SEARCH,
    payload: search,
  });

export const setBooks =(data)=>({
  type : SET_BOOKS,
  payload: data,
})