import { sendMyBookAvailability } from "../../../../actions/books";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const BookCard=({
    libraryid,
    image,
    author,
    title,
    synopsis,
    is_available,
})=>{
    
    const dispatch = useDispatch();
    const handleAvailabilityToggle= (e) =>{
        console.log('button clicked');
        dispatch(sendMyBookAvailability(is_available, e.target.value))
    }
    return (
        <>
        <div className="m-5 w-1/3 h-1/3 max-h-[300px] max-w-[200px]">
            <img className='w-full h-6/8 max-h-[275px]' src = { image }/>
            <h1 className="font-semibold">{title}</h1>
            <h4 className="mobile:hidden desktop:block">{author}</h4>
            {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden desktop:block">Pas de synopsis disponible </p>}
            {is_available? <button value = {libraryid} onClick={handleAvailabilityToggle}>Disponible </button> : <button value = {libraryid} onClick={handleAvailabilityToggle}>Indisponible</button>}
            {/* //? à faire : bouton disponible / Indisponible */}
            {/* reprendre l'algo de O'fig pour les étoiles RATING HERE*/ }
        </div>
     </>
    )
}
export default BookCard;