import { sendMyBookAvailability } from "../../../../actions/books";
import { useDispatch, useSelector } from "react-redux";
import BookAvailabilityToggleBUtton from "./BookAvailabilityToggleButton/bookAvailabilityToggleButton";

const BookCard=({
    libraryid,
    isbn,
    image,
    author,
    title,
    synopsis,
    is_available,
})=>{
    // const libraryFilter = useSelector(state=>state.books.libraryFilter);
    ;
    const dispatch = useDispatch();
    // const handleAvailabilityToggle= (e) =>{
    //     console.log('button clicked');
    //     dispatch(sendMyBookAvailability(is_available, e.target.value))
    // }
    return (
        <>
            <div value = {isbn} className="w-1/3 h-1/3 mobile:max-h-[280px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center">
                <img className='w-full h-6/8 mobile:max-h-[190px] mobile:max-w-[150px] desktop:max-h-[250px]' src = { image }/>
                <h1 className="font-semibold">{title}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
                {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden   desktop:block">Pas de synopsis disponible </p>}
               

                {!libraryFilter==="myBorrows" && <BookAvailabilityToggleBUtton {...book} libraryid= {libraryid}   /> }

                {/* <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
                <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={!libraryid} value={libraryid} id={libraryid} className="sr-only peer"></input>
                
                <div className="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white     after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border    after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                
                </label> */}
                {/* {is_available? <p  >Disponible </p> : <p     >Indisponible</p>} */}
                {/* reprendre l'algo de O'fig pour les étoiles RATING HERE*/ }
            </div>
         </>
    )
}
export default BookCard;