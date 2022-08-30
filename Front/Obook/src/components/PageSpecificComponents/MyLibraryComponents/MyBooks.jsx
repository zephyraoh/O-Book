import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../../actions/books";
import BookCard from "../../GlobalComponents/BooksResults/BookCard";


const MyBooks = ()=>{
    // Fonctions
    const dispatch = useDispatch();
    
    const libraryFilter = useSelector(state=>state.books.libraryFilter)
    console.log(libraryFilter)
    
    useEffect(() => {
        dispatch(fetchBooks());
        console.log("fetching from myBooks")
    }, []);
    // constantes

    const books= useSelector(state=>state.books);
    const myBooks= useSelector(state=>state.books.booksData.myBooks);
    // const myLends= useSelector(state=>state.books.booksData.myBooks);
    // const myLoans= useSelector(state=>state.books.booksData.myBooks);
    console.log("booksData:",books.booksData);
    
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
// {switch (libraryFilter){
//     case "allMyBooks":
        return (
            <>
                {myBooks.map((book) =>
                    (<BookCard key={book.libraryid} {...book}/>)
                )}
            </>
        )
  
        // case "myLoans":
        //     return (

        }

        
;

export default MyBooks