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
        <div onClick={handleClick} className='w-36 min-w-36 h-full flex flex-col m-5 desktop:ml-12 mobile:ml-5'>
            <img className='desktop:min-h-[180px] desktop:min-w-[120px] mobile:w-full mobile:min-w-[90px] mobile:max-w-[130px] mobile:min-h-[160px] mobile:max-h-[130px] desktop:max-h-[200px]' src= {image}/>
            {<h1 className='text-clip mobile:hidden desktop:block truncate'>{title}</h1>
            /* <h4>{author}</h4> */}
        </div>
    )
}
export default BookPreview;