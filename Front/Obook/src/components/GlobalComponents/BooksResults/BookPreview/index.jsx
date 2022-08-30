import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const BookPreview=({
    isbn,
    image,
    author,
    title,
})=>{
    
    return (
        <div className='flex-wrap w-3/12'>
            <img className='w-full' src= {image}/>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </div>
    )
}
export default BookPreview;