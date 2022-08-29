export const SET_SEARCH ='SET_SEARCH';
export const SEARCH_BOOKS ='SEARCH_BOOKS';
export const SET_BOOKS ='SET_BOOKS';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_LATEST_BOOKS = 'FETCH_LATEST_BOOKS';
export const SET_BOOKS_RESULTS_IN_SEARCH_STATE = 'SET_BOOKS_RESULTS_IN_SEARCH_STATE'; 
export const SEND_MY_BOOKS_AVAILABILITY = 'SEND_MY_BOOKS_AVAILABILITY';
export const SET_MY_BOOKS_AVAILABILITY = 'SET_MY_BOOKS_AVAILABILITY'; 
export const SET_MY_LIBRARY_FILTER = 'SET_MY_LIBRARY_FILTER';

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

export const fetchBooks = (value)=>({
  type : FETCH_BOOKS,
  payload: value
})

export const fetchLatestBooks = ()=>({
  type : FETCH_LATEST_BOOKS,
})

export const setBooksResultsInSearchState = (name, bookData) => ({
  type : SET_BOOKS_RESULTS_IN_SEARCH_STATE,
  name,
  bookData,
})

export const sendMyBookAvailability =(is_available, libraryId) =>({
  type :SEND_MY_BOOKS_AVAILABILITY,
  libraryId,
  is_available,
})

export const setMyBooksAvailability =(data) =>({
  type : SET_MY_BOOKS_AVAILABILITY,
  payload: data,
})
export const setMyLibrariFilter =(filter) =>({
  type : SET_MY_LIBRARY_FILTER,
  payload : filter,
})