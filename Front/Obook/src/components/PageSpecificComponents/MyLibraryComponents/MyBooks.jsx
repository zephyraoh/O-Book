import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks, setLoading } from "../../../actions/books";
import BookCard from "../../GlobalComponents/BooksResults/BookCard";
import BookAvailabilityToggleBUtton from "../../GlobalComponents/BooksResults/BookCard/BookAvailabilityToggleButton/bookAvailabilityToggleButton";
import { sendMyBookAvailability } from "../../../actions/books";
import { getMyLibrary } from "../../../actions/user";
import BorrowsBookCard from "../../GlobalComponents/BooksResults/BorrowsBookCard";
import Loading from "../../GlobalComponents/Loading";
import DeleteButton from "./DeleteButton";
import BookCardWithToggle from "./BookCardWithToggle";

const MyBooks = ()=>{
    // constantes
    const loading = useSelector(state => state.books.loading);
    const libraryFilter = useSelector(state => state.books.libraryFilter);
    // const myBooks = useSelector(state=>state.books.booksData.myBooks);
    const allBooks = useSelector(state => state.books.booksData.myBooks.books);
    const lends = useSelector(state => state.books.booksData.myBooks.lends);
    const borrow = useSelector(state => state.books.booksData.myBooks.borrow);
    // Fonctions
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(getMyLibrary());
        console.log('ON RECUPERE DE NOUVEAU LES INFOS SUR LA BIBLIOTHEQUE');
    }, []);

    if(loading){
        return <Loading/>
    }
    if (libraryFilter==='allMyBooks'){
        return (
            <div className='w-5/6 ml-64'>
                <h3 className='w-full text-3xl font-bold mb-4'>Mes livres</h3>
                <div className='w-full flex flex-wrap justify-evenly'>
                    {allBooks.map((book) =>
                        (<>
                            <BookCardWithToggle key={book.libraryid} {...book}/>
                            {/* <DeleteButton key={`delete${book.libraryid}`} {...book}/> */}
                        </>
                        )
                    )}
                </div>
            </div>
        )           
    }
    if(libraryFilter==='myLends'){
        return (
            <>
                <h3 className='text-3xl font-bold mb-4'>Mes prêts en cours</h3>
                <div className='flex justify-evenly'>
                    {lends.map((book) =>
                        (<>
                            <BookCard key={book.libraryid} {...book}/>
                        </>)    
                    )}
                </div>
            </>
        )
    }
    if(libraryFilter==='myBorrows'){
        return (
            <>
                <h3 className='text-3xl font-bold mb-4'>Mes emprunts en cours</h3>
                <div className='flex justify-evenly'>
                    {borrow.map((book) =>
                        (<>
                            <BorrowsBookCard key={book.libraryid} {...book}/>
                        </>)
                    )}
                </div>
            </>
        )
    }

    

        
}
export default MyBooks;
