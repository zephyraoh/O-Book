import MyLibraryMenu from "./MyLibraryComponents/MyLibraryMenu";
import MyBooks from "./MyLibraryComponents/MyBooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../actions/books";

const MyLibrary = ()=>{
   const dispatch = useDispatch();

return (
    <div className='w-screen h-7/8'>
    <MyLibraryMenu/>
    <MyBooks />
    </div>
);
};


export default MyLibrary;