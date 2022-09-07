import Button from "../../GlobalComponents/Button";
import { useSelector, useDispatch} from 'react-redux';
import { setMyLibraryFilter } from "../../../actions/books";

import './styles.scss';
import Loading from "../../GlobalComponents/Loading";


const MyLibraryMenu = ()=>{
    const libraryFilter = useSelector(state => state.books.libraryFilter);
    const loading = useSelector(state => state.books.loading);
    
    const dispatch = useDispatch()
    const handleClick = (e) =>{
         dispatch(setMyLibraryFilter(e.target.value))
         console.log("setting myLibrary with filter : ", e.target.value)
     }

     if (loading) {
        return ''
     }
    return (
        <div>
        <nav className="menu flex justify-around my-2 mobile:block desktop:hidden">
            <button className="p-1 px-3 m-1 rounded bg-[#AB9F9F] text-[#292F44] text-sm" type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick}>Ma Bibliothèque</button>
            <div>
                <button className="p-1 px-3 m-1 rounded bg-[#AB9F9F] text-[#292F44] text-sm" type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick}>Mes Prêts</button>
                <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">20</div>
            </div>
            <button className="p-1 px-3 m-1 rounded bg-[#AB9F9F] text-[#292F44] text-sm" type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick}>Mes Emprunts</button>
        </nav>
        <nav className="menu h-2/3 fixed p-5 flex flex-col justify-around my-2 border-r-2 border-[#292F44] mobile:hidden desktop:block">
            <button className="block p-1 px-3 m-3 rounded bg-[#AB9F9F] text-[#292F44] text-lg" type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick}>Ma Bibliothèque</button>
            <div className="relative">
                <button className="block p-1 px-3 m-3 rounded bg-[#AB9F9F] text-[#292F44] text-lg" type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick}>Mes Prêts</button>
                <div class="inline-flex absolute top-0 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>
            <button className="block p-1 px-3 m-3 rounded bg-[#AB9F9F] text-[#292F44] text-lg" type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick}>Mes Emprunts</button>
        </nav>
        </div>      
    )
    
};



export default MyLibraryMenu;
