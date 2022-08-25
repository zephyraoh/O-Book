import { useDispatch, useSelector } from "react-redux";

const MyBooks = ()=>{
    // Fonctions
    const dispatch = useDispatch();
    // constantes
    
    // fonctions


    // const myBooks = useSelector((state => state.user.library.books))
    // console.log("from MyBooks => state.user.library.books : ", myBooks);
    return (
        <>
        <p>Test</p>
        {/* {myBooks.map(book => {
            <p>I am a book</p>
        })} */}
        </>
    )
    
};

export default MyBooks