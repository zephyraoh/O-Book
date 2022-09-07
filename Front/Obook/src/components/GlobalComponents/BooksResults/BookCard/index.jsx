import { sendMyBookAvailability } from "../../../../actions/books";
import { useDispatch, useSelector } from "react-redux";
import BookAvailabilityToggleBUtton from "./BookAvailabilityToggleButton/bookAvailabilityToggleButton";
import { useNavigate, useParams } from 'react-router-dom';

const BookCard=({
    libraryid,
    isbn,
    image,
    author,
    title,
    synopsis,
    is_available,
})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAvailabilityToggle= (e) =>{
        console.log('button clicked');
        dispatch(sendMyBookAvailability(is_available, e.target.value))
    }

    return (
        <>
            <div value = {isbn} className="mobile:max-h-[230px] mobile:min-h-[230px] desktop:max-h-[260px] desktop:min-h-[260px] desktop:max-w-[170px] desktop:min-w-[170px] flex flex-col items-center">
                <img onClick={() => navigate(`/book/${isbn}`)} className=' block mobile:max-h-[160px] mobile:max-w-[105px] mobile:min-h-[160px] mobile:min-w-[105px] desktop:max-h-[240px] desktop:min-h-[240px] desktop:min-w-[170px] desktop:max-w-[170px] rounded-lg' src = { image }/>
                <h1 className="font-semibold desktop:max-h-[72px] text-ellipsis overflow-hidden">{title?.split('(')[0]}</h1>
                {/* <h4 className="mobile:hidden desktop:block">{author}</h4> */}
                {/* {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden   desktop:block">Pas de synopsis disponible </p>} */}
               


                {/* <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
                <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={!libraryid} value={libraryid} id={libraryid} className="sr-only peer"></input>
                
                <div className="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white     after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border    after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                
                </label> */}
                {/* {is_available? <p  >Disponible </p> : <p     >Indisponible</p>} */}
                {/* reprendre l'algo de O'fig pour les étoiles RATING HERE*/ }
            </div>
         </>
    )

    // return (
    //     <>
    //         <div value = {isbn} className="mobile:max-h-[280px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center">
    //             <img className='mobile:max-h-[190px] mobile:max-w-[150px] desktop:max-h-[220px] desktop:w-[160px] rounded-lg' src = { image }/>
    //             <h1 className="font-semibold">{title}</h1>
    //             <h4 className="mobile:hidden desktop:block">{author}</h4>
    //             {/* {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden   desktop:block">Pas de synopsis disponible </p>} */}
               

    //             {/* {!libraryFilter==="myBorrows" && <BookAvailabilityToggleBUtton {...book} libraryid= {libraryid} is_available={is_available}   /> } */}

    //             {/* <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
    //             <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={!libraryid} value={libraryid} id={libraryid} className="sr-only peer"></input>
                
    //             <div className="w-11 h-6 bg-[#292F44] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white     after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border    after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                
    //             </label> */}

    //             <label htmlFor={libraryid} className="inline-flex relative items-center cursor-pointer">
    //                 <input onClick={handleAvailabilityToggle} type="checkbox" defaultChecked={is_available} value={libraryid} id={libraryid} className="sr-only peer"/>
    //                 <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //                 <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{is_available? "Disponible" : "Indisponible"}</span>
    //             </label>
    //         </div>
    //      </>
    // )
}
export default BookCard;