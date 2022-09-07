import { NavLink } from "react-router-dom";

const BookPreview=({
    isbn,
    image,
    title,
})=>{

    const link = `/book/${isbn}`;

    return (
        <div className='w-36 min-w-36 h-full flex flex-col m-5 desktop:ml-12 mobile:ml-5'>
            <NavLink to={link}>
            <img className='desktop:min-h-[180px] desktop:min-w-[120px] mobile:pl-4 desktop:pl-0 mobile:w-full mobile:min-w-[90px] mobile:max-w-[130px] mobile:min-h-[180px] mobile:max-h-[130px] desktop:max-h-[200px]' src= {image}/>
            <h1 className='text-clip mobile:hidden desktop:block truncate'>{title.split('(')[0]}</h1>
            </NavLink>
        </div>
    )
}
export default BookPreview;