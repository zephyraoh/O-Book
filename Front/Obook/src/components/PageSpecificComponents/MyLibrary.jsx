import MyLibraryMenu from "./MyLibraryComponents/MyLibraryMenu";
import MyBooks from "./MyLibraryComponents/MyBooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../actions/books";

const MyLibrary = ()=>{
   const dispatch = useDispatch();

  

// const {state:{user:{myBooks}}} =useSelector 

return (
    <>
    <MyLibraryMenu/>
    <MyBooks />
    </>
);

};


export default MyLibrary;