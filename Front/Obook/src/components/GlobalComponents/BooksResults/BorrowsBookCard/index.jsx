import { sendMyBookAvailability } from "../../../../actions/books";
import { useDispatch, useSelector } from "react-redux";

const BorrowsBookCard=({
    libraryid,
    isbn,
    image,
    author,
    title,
    synopsis,
})=>{
    const libraryFilter = useSelector(state=>state.books.libraryFilter);
    console.log(libraryFilter);
    ;
    
    return (
        <>
            <div value = {isbn} className="w-1/3 h-1/3 mobile:max-h-[280px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center">
                <img className='w-full h-6/8 mobile:max-h-[190px] mobile:max-w-[150px] desktop:max-h-[250px]' src = { image }/>
                <h1 className="font-semibold">{title}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
                {synopsis? <p className="mobile:hidden desktop:block text-ellipsis"> {synopsis}</p> : <p className="mobile:hidden   desktop:block">Pas de synopsis disponible </p>}
            </div>
         </>
    )
}
export default BorrowsBookCard;