import Button from "../../GlobalComponents/Button";
import { useSelector, useDispatch} from 'react-redux';

import './styles.scss';




const MyLibraryMenu = ()=>{

     // const
     const libraryFilter = useSelector(state=>state.books.libraryFilter)
     console.log(libraryFilter);

     const handleClick = (e) =>{
         setLibraryFilter(e.target.value)
         console.log("setting myLibrary with filter : ", e.target.value)
     }
    return (
        <nav className="menu">
            <button type="button" value = "allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick} />
            <button type="button" value = "myLends"  name= "Mes Prêts" onClick={handleClick} />
            <button type="button" value = "myLoans"  name= "Mes Emprunts" onClick={handleClick}/>
        </nav>    
    )
    
};



export default MyLibraryMenu;
