import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, fetchLatestBooks } from '../../../actions/books';
import BookPreview from './BookPreview';
import './styles.scss';

const BooksResults = () => {
  
  const dispatch = useDispatch();
    
  useEffect(() => {
      dispatch(fetchLatestBooks());
  }, []);
  
  const latestBooks = useSelector(state=>state.books.booksData.searchedBooks);

  return(
  <div className= 'flex overflow-x-auto h-64'>
    
    {latestBooks.map((book) =>
        (
            <BookPreview key={book.isbn} {...book}/>
        )
            
        )}

    
  </div>
  )
};

export default BooksResults;