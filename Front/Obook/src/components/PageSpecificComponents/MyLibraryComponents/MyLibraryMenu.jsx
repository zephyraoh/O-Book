import Button from "../../GlobalComponents/Button";
import { useSelector, useDispatch} from 'react-redux';
import { setMyLibraryFilter } from "../../../actions/books";

import './styles.scss';




const MyLibraryMenu = ()=>{
    const libraryFilter=useSelector(state=>state.books.libraryFilter)
    const statebooks=useSelector(state=>state.books)
    
    const dispatch = useDispatch()
    const handleClick = (e) =>{
         dispatch(setMyLibraryFilter(e.target.value))
         console.log("setting myLibrary with filter : ", e.target.value)
     }
    return (
        <nav className="menu">
            <button type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick}>Ma Bibliothèque</button>
            <button type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick}>Mes Prêts</button>
            <button type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick}>Mes Emprunts</button>
        </nav>    
    )
    
};



export default MyLibraryMenu;
