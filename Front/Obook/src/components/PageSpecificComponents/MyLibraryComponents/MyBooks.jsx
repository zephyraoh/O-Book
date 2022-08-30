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
    const statebooks = useSelector(state=>state.books)
    console.log("STATEBOOKS",statebooks)
    // const myBooks= useSelector(state=>state.books.booksData.myBooks);


    return (
        <>
        <p>{libraryFilter}</p>
        <div className='flex justify-evenly'>
                    {myBooks.map((book) =>
                        (<BookCard key={book.libraryid} {...book}/>)
                    )}
        </div>
        </>
    )
    // if(libraryFilter==='myLends'){
    //     return (
    //         <>
    //             <p>Hello myLends</p>
    //         </>
    //     )
    // }
    // if (libraryFilter==='allMyBooks'){
    //     return (
    //         <>
    //             <p>{libraryFilter}</p>
    //         </>
    //     )           
    // }
    // if(libraryFilter==='myBorrows'){
    //     return (
    //         <>
    //             <p>Hello my borrows</p>
    //         </>
    //     )
    // }

    

        
}

export default MyBooks;