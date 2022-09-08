export const SET_SEARCH ='SET_SEARCH';
export const SEARCH_BOOKS ='SEARCH_BOOKS';
export const SEARCH_ISBN = 'SEARCH_ISBN';
export const SET_BOOKS ='SET_BOOKS';
export const SET_SINGLE_BOOK ='SET_SINGLE_BOOK';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_LATEST_BOOKS = 'FETCH_LATEST_BOOKS';
export const SET_BOOKS_RESULTS_IN_SEARCH_STATE = 'SET_BOOKS_RESULTS_IN_SEARCH_STATE'; 
export const SEND_MY_BOOKS_AVAILABILITY = 'SEND_MY_BOOKS_AVAILABILITY';
export const SET_MY_BOOKS_AVAILABILITY = 'SET_MY_BOOKS_AVAILABILITY'; 
export const SET_MY_LIBRARY_FILTER = 'SET_MY_LIBRARY_FILTER';
export const FETCH_UPDATES = 'FETCH_UPDATES';
export const SET_UPDATES = 'SET_UPDATES';
export const GET_ONE_BOOK_DETAILS = 'GET_ONE_BOOK_DETAILS';
export const SET_VISITED_BOOK_PAGE = 'SET_VISITED_BOOK_PAGE';
export const FETCH_ADD_NEW_BOOK_TO_MY_LIBRARY= 'FETCH_ADD_NEW_BOOK_TO_MY_LIBRARY';
export const SET_LOADING = 'SET_LOADING';
export const DELETE_BOOK = 'DELETE_BOOK';
export const REQUEST_LOAN = 'REQUEST_LOAN';
export const GET_BOOK_OWNERS = 'GET_BOOK_OWNERS';
export const SET_BOOK_OWNERS = 'SET_BOOK_OWNERS';
export const ACCEPT_LOAN = 'ACCEPT_LOAN';
export const END_LOAN = 'END_LOAN';
export const FETCH_LENDER_INFOS = 'FETCH_LENDER_INFOS';
export const SET_LENDER_INFOS = 'SET_LENDER_INFOS';
export const SET_NEW_BOOK_STATUS = 'SET_NEW_BOOK_STATUS';

// --------- AJOUT DUKE TEST CI-DESSOUS ------------- //
export const UNSET_BOOK = 'UNSET_BOOK';
// export const SET_LOAN_IN_PROGRESS = 'SET_LOAN_IN_PROGRESS';

export const setSearchField = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setSelectedFilter = (value)=>({
  type: SET_SELECTED_FILTER,
  payload: value,
});

export const setBooks =(data)=>({
  type: SET_BOOKS,
  payload: data,
});

export const setSingleBook = (data) => ({
  type : SET_SINGLE_BOOK,
  payload: data,
});

export const searchBooks = ()=>({
  type: SEARCH_BOOKS,
});

export const searchISBN = ()=>({
  type: SEARCH_ISBN,
});

export const fetchBooks = ()=>({
  type: FETCH_BOOKS,
});

export const fetchLatestBooks = ()=>({
  type: FETCH_LATEST_BOOKS,
});

export const setBooksResultsInSearchState = (name, bookData) => ({
  type: SET_BOOKS_RESULTS_IN_SEARCH_STATE,
  name,
  bookData,
});

export const sendMyBookAvailability =(is_available, libraryId) =>({
  type: SEND_MY_BOOKS_AVAILABILITY,
  libraryId,
  is_available,
});

export const setMyBooksAvailability =(data) =>({
  type: SET_MY_BOOKS_AVAILABILITY,
  payload: data,
});

export const setMyLibraryFilter =(data) =>({
  type: SET_MY_LIBRARY_FILTER,
  payload: data,
});

export const fetchUpdates =()=>({
  type: FETCH_UPDATES,
});

export const setUpdates =(data)=>({
  type: SET_UPDATES,
  payload: data
});

export const getOneBookDetails = (isbn)=>({
  type: GET_ONE_BOOK_DETAILS,
  payload: isbn
});

export const setVisitedBookPage = (data)=>({
  type: SET_VISITED_BOOK_PAGE,
  payload: data,
});

export const fetchAddNewBookToMyLibrary=(isbn)=>({
  type : FETCH_ADD_NEW_BOOK_TO_MY_LIBRARY,
  payload: isbn,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const requestLoan = (id) => ({
  type: REQUEST_LOAN,
  payload: id,
});

export const acceptLoan = (loanId) => ({
  type: ACCEPT_LOAN,
  payload: loanId,
});

export const endLoan = (loanId) =>({
	type: END_LOAN,
	payload: loanId,
})

export const getBookOwners = (id) => ({
  type: GET_BOOK_OWNERS,
  payload: id,
});

export const setBookOwners = (data) => ({
  type: SET_BOOK_OWNERS,
  payload: data,
});

export const fetchLenderInfos = (libraryid) => ({
  type: FETCH_LENDER_INFOS,
  payload: libraryid,
});

export const setLenderInfos = (data) => ({
  type: SET_LENDER_INFOS,
  payload: data,
});

// --------- AJOUT DUKE TEST CI-DESSOUS ------------- //
export const unsetBook = (data) => ({
  type: UNSET_BOOK,
  payload: data,
});

export const setNewBookStatus = (libraryid, status) => ({
  type: SET_NEW_BOOK_STATUS,
  libraryid,
  status,
});