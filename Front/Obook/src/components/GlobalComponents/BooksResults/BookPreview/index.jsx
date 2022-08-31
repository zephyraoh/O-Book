import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookPreview=({
    isbn,
    image,
    author,
    title,
})=>{

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/book/${isbn}`);
      };

    return (
        <div onClick={handleClick} className='w-36 min-w-36 h-56 min-h-56 flex flex-col items-center m-5'>
            <img className='w-24 min-w-24 h-42 min-h-42' src= {image}/>
            <h1 className='text-clip'>{title}</h1>
            <h4>{author}</h4>
        </div>
    )
}
export default BookPreview;