import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import BookPreview from '../BooksResults/BookPreview';
import { setLoading } from '../../../actions/books';
import Loading from '../Loading';

const SearchResult = () => {
    const searchResults = useSelector(state=>state.books.booksData.searchedBooks);
    const loading = useSelector(state => state.books.loading);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setLoading(true));
      setTimeout(() => {
      dispatch(setLoading(false));
      }, "1000")
  }, [searchResults]);

  if (loading){
    return <Loading/>
  }
  return(
  <div className= 'flex flex-wrap justify-center'>
    {searchResults.map((book) =>
        (
            <BookPreview key={book.isbn} {...book}/>
        )
            
        )}
  </div>
  )
};

export default SearchResult;