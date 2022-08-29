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
            <img src = { image }/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            {synopsis? <p> {synopsis}</p> : <p>Pas de synopsis disponible </p>}
            {is_available? <button value = {libraryid} onClick={handleAvailabilityToggle}>Disponible </button> : <button value = {libraryid} onClick={handleAvailabilityToggle}>Indisponible</button>}
            {/* //? à faire : bouton disponible / Indisponible */}
            {/* reprendre l'algo de O'fig pour les étoiles RATING HERE*/ }
     </>
    )
}
export default BookCard;