import { deleteBook, sendMyBookAvailability, unsetBook } from "../../../actions/books";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import EscapeButton from "../../GlobalComponents/EscapeButton";
import { getMyLibrary } from "../../../actions/user";

const BookCardWithToggle=({
    libraryid,
    isbn,
    image,
    author,
    title,
    is_available,
})=>{
    
    const handleClick = () => {
        dispatch(deleteBook(libraryid));
        
        // AJOUT DUKE, FONCTIONNEL - à supprimer si besoin
        dispatch(unsetBook(libraryid));
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // TEST DUKE
    // const books = useSelector(state => state.books.booksData.myBooks);

    const handleAvailabilityToggle= (e) =>{
        console.log('button clicked');
        dispatch(sendMyBookAvailability(is_available, e.target.value))
    };

    return (
        <>
            <div value = {isbn} className="mobile:max-h-[300px] mobile:min-h-[250px] desktop:max-h-[300px] desktop:min-w-[200px] desktop:min-h-[320px] desktop:max-w-[200px] flex flex-col items-center relative mb-5 mx-3">
                <img onClick={() => navigate(`/book/${isbn}`)} className='mobile:max-h-[150px] mobile:max-w-[105px] mobile:min-h-[150px] mobile:min-w-[105px] desktop:min-h-[230px] desktop:max-h-[220px] desktop:min-w-[160px] desktop:max-w-[160px] rounded-lg' src = { image }/>
                <h1 className="font-semibold desktop:max-h-[48px] mobile:max-h-[60px] mobile:max-w-[100px] text-ellipsis overflow-hidden desktop:text-base mobile:text-sm">{title?.split('(')[0]}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
                {/* {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden   desktop:block">Pas de synopsis disponible </p>} */}
               

                {/* {!libraryFilter==="myBorrows" && <BookAvailabilityToggleBUtton {...book} libraryid= {libraryid} is_available={is_available}   /> } */}

                {/* <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
                <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={!libraryid} value={libraryid} id={libraryid} className="sr-only peer"></input>
                
                <div className="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white     after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border    after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                
                </label> */}
                <EscapeButton className='text-[#d62828] desktop:text-3xl mobile:text-2xl absolute desktop:right-5 mobile:right-0 top-0 cursor-pointer' onClick={handleClick}/>
                <div className="absolute bottom-0">
                    <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer position-absolute bottom-0">
                    <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={is_available} value={libraryid} id={libraryid} className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mobile:hidden desktop:inline">{is_available? "Disponible" : "Indisponible"}</span>
                    </label>
                </div>
            </div>
         </>
    )
}
export default BookCardWithToggle;