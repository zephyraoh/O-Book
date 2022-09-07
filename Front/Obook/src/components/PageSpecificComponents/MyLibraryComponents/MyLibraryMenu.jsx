import Button from "../../GlobalComponents/Button";
import { useSelector, useDispatch} from 'react-redux';
import { setMyLibraryFilter } from "../../../actions/books";

import './styles.scss';
import Loading from "../../GlobalComponents/Loading";


const MyLibraryMenu = ()=>{
    const libraryFilter = useSelector(state => state.books.libraryFilter);
    const loading = useSelector(state => state.books.loading);
    const lends = useSelector(state => state.books.booksData.myBooks.lends);
    const pendingLends = lends.filter(lend => lend.status === 'En attente de validation');
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
            <button type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick} className=" m-1 px-2 py-2 text-sm font-medium text-center text-[#292F44] bg-[#AB9F9F] rounded-lg hover:bg-[#292F44] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#292F44]">
            Ma bibliothèque
            </button>
            <button type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick} className=" m-1 px-2 py-2 text-sm font-medium text-center text-[#292F44] bg-[#AB9F9F] rounded-lg hover:bg-[#292F44] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#292F44]">
            Mes prêts
            {pendingLends.length? <span class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
            {pendingLends.length}
            </span> : ''}
            </button>
            <button type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick} className="m-1 px-2 py-2 text-sm font-medium text-center text-[#292F44] bg-[#AB9F9F] rounded-lg hover:bg-[#292F44] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#292F44]">
            Mes emprunts
            </button>
            {/* <button className="p-1 px-3 m-1 rounded bg-[#AB9F9F] text-[#292F44] text-sm" type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick}>Ma bibliothèque</button>
            <button className="p-1 px-3 m-1 rounded bg-[#AB9F9F] text-[#292F44] text-sm" type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick}>Mes prêts</button>
            {pendingLends.length ? <div class="inline-flex absolute justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full left-[216px]">{pendingLends.length}</div> : ''}
            <button className="p-1 px-3 m-1 rounded bg-[#AB9F9F] text-[#292F44] text-sm" type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick}>Mes emprunts</button> */}
        </nav>
        <nav className="menu absolute w-1/8 h-2/3 p-5 flex flex-col justify-around my-2 border-r-2 border-[#292F44] mobile:hidden desktop:block">
            {/* <button className="block p-1 px-3 m-3 rounded bg-[#AB9F9F] text-[#292F44] text-lg" type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick}>Ma bibliothèque</button>
            <div className="relative">
                <button className="align-center block p-1 px-3 m-3 rounded bg-[#AB9F9F] text-[#292F44] text-lg" type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick}>Mes prêts</button>
                
            </div>
            <button className="block p-1 px-3 m-3 rounded bg-[#AB9F9F] text-[#292F44] text-lg" type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick}>Mes emprunts</button> */}


            {/* // TEST DUKE VERSION DESKTOP// */}
            
            <button type="button" value="allMyBooks"  name= "Ma Bibliothèque" onClick={handleClick} className="block m-2 flex items-center px-5 py-2.5 text-sm font-medium text-center text-[#292F44] bg-[#AB9F9F] rounded-lg hover:bg-[#292F44] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#292F44]">
            Ma bibliothèque
            </button>
            <button type="button" value="myLends"  name= "Mes Prêts" onClick={handleClick} className="block m-2 flex items-center px-5 py-2.5 text-sm font-medium text-center text-[#292F44] bg-[#AB9F9F] rounded-lg hover:bg-[#292F44] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#292F44]">
            Mes prêts
            {pendingLends.length? <span class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
            {pendingLends.length}
            </span> : ''}
            </button>
            <button type="button" value="myBorrows"  name= "Mes Emprunts" onClick={handleClick} className="block m-2 flex items-center px-5 py-2.5 text-sm font-medium text-center text-[#292F44] bg-[#AB9F9F] rounded-lg hover:bg-[#292F44] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#292F44]">
            Mes emprunts
            </button>
        </nav>
        </div>      
    )
    
};



export default MyLibraryMenu;
