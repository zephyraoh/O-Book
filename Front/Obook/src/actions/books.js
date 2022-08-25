export const SET_SEARCH ='SET_SEARCH';
export const SEARCH_BOOKS ='SEARCH_BOOKS';
export const SET_BOOKS ='SET_BOOKS';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';

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

export const searchBooks = ()=>({
  type : SEARCH_BOOKS,
})

export const fetchBooks = ()=>({
  type : FETCH_BOOKS,
})