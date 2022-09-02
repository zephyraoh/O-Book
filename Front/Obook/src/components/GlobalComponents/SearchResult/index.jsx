import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import BookPreview from '../BooksResults/BookPreview';

const SearchResult = () => {
    const searchResults = useSelector(state=>state.books.booksData.searchedBooks);
    // console.log(searchResults);

  

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