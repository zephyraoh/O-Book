import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const BookPreview=({
    isbn,
    image,
    author,
    title,
})=>{
    
    return (
        <div className='w-36 h-56 flex flex-col m-5'>
            <img className='w-3/4 h-2/3' src= {image}/>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </div>
    )
}
export default BookPreview;