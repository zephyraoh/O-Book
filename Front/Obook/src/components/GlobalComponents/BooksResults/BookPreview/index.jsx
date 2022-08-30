import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const BookPreview=({
    isbn,
    image,
    author,
    title,
})=>{
    
    return (
        <div className='flex-wrap'>
            <img className='w-full' src= {image}/>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </div>
    )
}
export default BookPreview;