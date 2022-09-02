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
            <img className='desktop:min-h-[180px] desktop:min-w-[100px] mobile:w-full mobile:min-w-[90px] mobile:min-h-[130px] mobile:max-h-[130px]' src= {image}/>
            {/* <h1 className='text-clip mobile:hidden desktop:block'>{title}</h1>
            <h4>{author}</h4> */}
        </div>
    )
}
export default BookPreview;