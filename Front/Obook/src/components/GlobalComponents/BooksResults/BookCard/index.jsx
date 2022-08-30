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
        <div className="w-1/3 h-1/3 mobile:max-h-[280px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center">
            <img className='w-full h-6/8 mobile:max-h-[190px] mobile:max-w-[150px] desktop:max-h-[250px]' src = { image }/>
            <h1 className="font-semibold">{title}</h1>
            <h4 className="mobile:hidden desktop:block">{author}</h4>
            {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden desktop:block">Pas de synopsis disponible </p>}
            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer"></input>
            <div class="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
            {is_available? <button value = {libraryid} onClick={handleAvailabilityToggle}>Disponible </button> : <button value = {libraryid} onClick={handleAvailabilityToggle}>Indisponible</button>}
            {/* //? à faire : bouton disponible / Indisponible */}
            {/* reprendre l'algo de O'fig pour les étoiles RATING HERE*/ }
        </div>
     </>
    )
}
export default BookCard;