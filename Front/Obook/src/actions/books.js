export const SET_SEARCH ='SET_SEARCH';
export const GET_BOOKS ='GET_BOOKS';
export const SET_BOOKS ='SET_BOOKS';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';

export const setSearchField = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setSelectedFilter = (value)=>({
  type : SET_SELECTED_FILTER,
  payload: value,
})
export const setBooks =(data)=>({
  type : SET_BOOKS,
  payload: data,
})

export const getBooks = ()=>({
  type : GET_BOOKS,
})