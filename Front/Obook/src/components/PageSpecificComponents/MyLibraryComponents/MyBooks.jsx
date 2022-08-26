import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../../actions/books";
import BookCard from "../../GlobalComponents/BooksResults/BookCard";


const MyBooks = ()=>{
    // Fonctions
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchBooks());
    }, []);
    // constantes
    const myBooks= useSelector(state=>state.books.booksData.myBooks);
    console.log("my books:",myBooks);
    
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

    return (
        
        <>
        {myBooks.map((book) =>
        (
        <BookCard key={book.libraryid} {...book}/>
        )
            
        )}
        </>
        
    )
    
};

export default MyBooks