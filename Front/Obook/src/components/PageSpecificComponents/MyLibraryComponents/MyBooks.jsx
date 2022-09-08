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
import LendsBookCard from "./LendsBookCard";
import { useNavigate, useParams } from 'react-router-dom';

const MyBooks = ()=>{
    // constantes
    const loading = useSelector(state => state.books.loading);
    const libraryFilter = useSelector(state => state.books.libraryFilter);
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
            <div className='desktop:w-5/6 mobile:w-full h-3/4 desktop:ml-64'>
                <h3 className='w-full desktop:text-3xl mobile:text-xl font-bold mb-4'>Mes livres</h3>
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
            <div className='desktop:w-5/6 mobile:w-full h-3/4 desktop:ml-64'>
                <h3 className='w-full desktop:text-3xl mobile:text-xl font-bold mb-4'>Mes prêts en cours</h3>
                <div className='w-full flex flex-wrap justify-evenly'>
                    {lends.map((book) =>
                        (<>
                            <LendsBookCard key={book.libraryid} {...book}/>
                        </>)    
                    )}
                </div>
            </div>
        )
    }
    if(libraryFilter==='myBorrows'){
        return (
            <div className='desktop:w-5/6 mobile:w-full h-3/4 desktop:ml-64'>
                <h3 className='w-full desktop:text-3xl mobile:text-xl font-bold mb-5'>Mes emprunts en cours</h3>
                <div className='w-full flex flex-wrap justify-evenly'>
                    {borrow.map((book) =>
                        (<>
                            <BorrowsBookCard key={book.libraryid} {...book}/>
                        </>)
                    )}
                </div>
            </div>
        )
    }
        
}
export default MyBooks;
