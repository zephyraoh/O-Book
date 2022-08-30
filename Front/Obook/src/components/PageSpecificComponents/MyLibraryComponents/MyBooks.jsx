import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../../actions/books";
import BookCard from "../../GlobalComponents/BooksResults/BookCard";


const MyBooks = ()=>{
    // Fonctions
    const dispatch = useDispatch();
    // console.log(libraryFilter)
    
    useEffect(() => {
        dispatch(fetchBooks());

        console.log("fetching from myBooks")
    }, []);


    // constantes
    const libraryFilter = useSelector(state=>state.books.libraryFilter)
    const myBooks = useSelector(state=>state.books.booksData.myBooks)


    // return (
    //     <>
    //         <p>{libraryFilter}</p>
    //         <div className='flex justify-evenly'>
    //                     {/* {myBooks.map((book) =>
    //                         (<BookCard key={book.libraryid} {...book}/>)
    //                     )} */}
    //         </div>
    //     </>
    
    if (libraryFilter==='allMyBooks'){
        return (
            <>
                <h3>My books</h3>
                <div className='flex justify-evenly'>
                    {myBooks.books.map((book) =>
                        (<BookCard key={book.libraryid} {...book}/>)
                    )}
                </div>
            </>
        )           
    }
    if(libraryFilter==='myLends'){
        return (
            <>
                <h3>My lends</h3>
                <div className='flex justify-evenly'>
                    {myBooks.lends.map((book) =>
                        (<BookCard key={book.libraryid} {...book}/>)
                    )}
                </div>
            </>
        )
    }
    if(libraryFilter==='myBorrows'){
        return (
            <>
                <h3>My borrows</h3>
                <div className='flex justify-evenly'>
                    {myBooks.borrow.map((book) =>
                        (<BookCard key={book.libraryid} {...book}/>)
                    )}
                </div>
            </>
        )
    }

    

        
}

export default MyBooks;