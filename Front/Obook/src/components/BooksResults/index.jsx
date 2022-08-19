import { useSelector } from 'react-redux';
import BookMini from './BookCard';
import './styles.scss';

const BooksResults = () => {
  

  const booksData = useSelector(state =>state.search.booksData) ;

  return(
  <div>
    {/* Books result : */}
    {/*  */}
    {/* booksData.map(book => {
      <BookMini key = {book.id} {...book}>
    } */}
    <BookMini />
  </div>
  )
};

export default BooksResults;