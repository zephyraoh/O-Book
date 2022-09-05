import { sendMyBookAvailability } from "../../../actions/books";
import { useDispatch, useSelector } from "react-redux";

const LendsBookCard=({
    libraryid,
    isbn,
    image,
    author,
    title,
    synopsis,
    is_available,
})=>{
    const dispatch = useDispatch();

    return (
        <>
            <div value = {isbn} className="mobile:max-h-[280px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center">
                <img className='mobile:max-h-[190px] mobile:max-w-[150px] desktop:max-h-[220px] desktop:w-[160px] rounded-lg' src = { image }/>
                <h1 className="font-semibold">{title}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
            </div>
         </>
    )
}
export default LendsBookCard;