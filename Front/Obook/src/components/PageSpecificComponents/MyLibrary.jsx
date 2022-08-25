import MyLibraryMenu from "./MyLibraryComponents/MyLibraryMenu";
import MyBooks from "./MyLibraryComponents/MyBooks";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../actions/books";

const MyLibrary = ()=>{
   const dispatch = useDispatch();

   dispatch(fetchBooks())
// const {state:{user:{myBooks}}} =useSelector 

return (
    <>
    <MyLibraryMenu/>
    <MyBooks />
    </>
);

};


export default MyLibrary;