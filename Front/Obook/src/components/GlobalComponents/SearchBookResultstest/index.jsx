import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import BookPreview from '../BooksResults/BookPreview';

const SearchBookResultstest = () => {
    const SearchBooks = useSelector(state=>state.books.booksData.searchedBooks);

  

  return(
  <div className= 'flex overflow-x-auto h-64'>
    
    {SearchBooks.map((book) =>
        (
            <BookPreview key={book.isbn} {...book}/>
        )
            
        )}

    
  </div>
  )
};

export default SearchBookResultstest;