import MyLibraryMenu from "./MyLibraryComponents/MyLibraryMenu";
import MyBooks from "./MyLibraryComponents/MyBooks";

const MyLibrary = ()=>{
    
// const {state:{user:{myBooks}}} =useSelector 

return (
    <>
    <MyLibraryMenu/>
    <MyBooks />
    </>
);

};


export default MyLibrary;