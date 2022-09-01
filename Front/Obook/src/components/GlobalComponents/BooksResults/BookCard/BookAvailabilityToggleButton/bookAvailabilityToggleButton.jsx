
import { sendMyBookAvailability } from "../../../../../actions/books";
import { useDispatch } from "react-redux";

const BookAvailabilityToggleBUtton =({
    libraryid,
    is_available,}
)=>{
    const dispatch = useDispatch()
    const handleAvailabilityToggle= (e) =>{
        console.log('button clicked');
        dispatch(sendMyBookAvailability(is_available, e.target.value))}

    return(  
    <>
        <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
            <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={!libraryid} value={libraryid} id={libraryid} className="sr-only peer"></input>
                
            <div className="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white     after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border    after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            {is_available? <p value = {libraryid} >Disponible </p> : <p value = {libraryid}    >Indisponible</p>}
        </label>      


            {/* <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
                <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={!libraryid} value={libraryid} id={libraryid} className="sr-only peer"></input>
                
                <div className="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white     after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border    after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                
                </label>  */}
                {/* {is_available? <p  >Disponible </p> : <p     >Indisponible</p>} */}

            
    </>
    )

} 


export default BookAvailabilityToggleBUtton;