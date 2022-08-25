import { useDispatch, useSelector } from "react-redux";

const MyBooks = ()=>{

    const dispatch = useDispatch();
    const myBooks = useSelector((state => state.user.library.books))
    console.log(myBooks);
    return (
        <>
        <p>Test</p>
        {myBooks.map(book => {
            <p>I am a book</p>
        })}
        </>
    )
    
};

export default MyBooks