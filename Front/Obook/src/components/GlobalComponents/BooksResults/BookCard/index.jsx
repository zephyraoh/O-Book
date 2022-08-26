import { useDispatch } from "react-redux";

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
        dispatch(setMyBookAvailability(e.target.value))
    }
     
    return (
        <>
            <img src = { image }/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            {synopsis? <p> {synopsis}</p> : <p>Pas de synopsis disponible </p>}
            {is_available? <button value = {libraryid} onClick={handleClick}>Disponible </button> : <button>Indisponible</button>}
            {/* //? à faire : bouton disponible / Indisponible */}
            {/* reprendre l'algo de O'fig pour les étoiles RATING HERE*/ }
     </>
    )
}
export default BookCard;