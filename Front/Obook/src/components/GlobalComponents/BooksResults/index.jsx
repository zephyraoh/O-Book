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
  <div className= 'flex'>
    
    {latestBooks.map((book) =>
        (
        <BookPreview key={book.isbn} {...book}/>
        )
            
        )}
  </div>
  )
};

export default BooksResults;


    // fonctions

/**book:{
    authors: []
    binding: "Paperback"
    date_published: "2019"
    image: "https://images.isbndb.com/covers/75/98/9782298157598.jpg"
    isbn: "2298157596"
    isbn13: "9782298157598"
    language: "fr"
    msrp: "0.00"
    pages: 457
    synopsis: "Et Si Tous Les Insectes Du Monde Se Mettaient Soudainement à Communiquer Entre Eux ? A S'organiser ? Nous Ne Survivrions Pas Plus De Quelques Jours. Entre Un Crime Spectaculaire Et La Disparition Inexpliquée D'une Jeune Femme, Les Chemins Du Détective Atticus Gore Et De La Privée Kat Kordell Vont S'entremêler. Et Les Confronter à Une Vérité Effrayante. Des Montagnes De Los Angeles Aux Bas-fonds De New York, Un Thriller Implacable Et Documenté Qui Va Vous Démanger."
    title: "Un(e)secte"
    title_long: "Un(e)secte" 
}
    */

