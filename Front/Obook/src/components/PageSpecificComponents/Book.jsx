import DOMPurify from 'dompurify';
import PopUpModal from '../GlobalComponents/PopUpModal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMyLibrary } from '../../actions/user';
import { getOneBookDetails, fetchAddNewBookToMyLibrary, setLoading, getBookOwners } from '../../actions/books';
import { toggleSignInModal } from '../../actions/user';
import Loading from '../GlobalComponents/Loading';
import BookOwners from './BookComponents/BookOwner'
import BookOwner from './BookComponents/BookOwner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const removeTags = (str) => {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
};

const Book = ()=>{
    //const
    const params = useParams();
    const dispatch = useDispatch();
    const book = useSelector(state => state.books.visitedBookPage);
    const cleanSynopsis = DOMPurify.sanitize(book?.synopsis);
    const synopsisCleanHtml = removeTags(cleanSynopsis);
    const isLogged = useSelector(state => state.user.isLogged);
    const loading = useSelector(state => state.books.loading);
    const bookOwners = useSelector(state => state.books.bookOwners);
    const navigate = useNavigate();
    
    const handleAddBookAction=(e)=>{
        console.log("value", e.target.value)
        if (isLogged){
            // return <PopUpModal description='Souhaitez vous ajouter ce livre à votre bibliothèque' actionYes={handleAddBookAction} />
            dispatch(fetchAddNewBookToMyLibrary(e.target.value));
            navigate('/mylibrary');
        } else {
            dispatch(toggleSignInModal(true));
        }
    };
   
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(getBookOwners(params.id));
        dispatch(getOneBookDetails(params.id));
    }, []);
  
    console.log(bookOwners);

    if(loading){
        return <Loading/>
    }

        return(
        <div className=' flex my-6 w-full justify-center'>
            <div className='flex mx-auto w-3/4 justify-center'>
                <img className='desktop:w-1/4 desktop:min-w-[200px] desktop:min-h-[450px] desktop:max-w-[320px] desktop:max-h-[450px] mobile:w-[120px] mobile:h-[180px] my-5' src={book?.image} alt="" />
                <div className='flex flex-col items-start m-6 pl-8 w-7/8'>
                    <h1 className='desktop:text-3xl mobile:text-lg font-bold mb-5'>{book?.title}</h1>
                    <h3 className='my-3'>{book?.authors} - {book?.date_published}</h3>
                    <h3 className='my-3'>{book?.publisher}</h3>
                    <h3 className='font-semibold my-3'>Résumé</h3>
                    <p>{synopsisCleanHtml ? synopsisCleanHtml : 'Résumé indisponible'}</p>
                    <button className='p-2 px-3 my-3 place-self-center rounded bg-[#292F44] text-[#F5F5F5]' value={book.isbn} onClick={handleAddBookAction}>Ajouter à ma bibliothèque</button>
                </div>
            </div>
                <div className='w-1/4 flex flex-col items-center h-3/4'>
                    <h3 className='font-bold desktop:text-2xl my-4'>Ils possèdent ce livre :</h3>
                    <Swiper 
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        spaceBetween={2}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                    >
                    {bookOwners.map((owner) =>
                        (
                        <SwiperSlide>   
                            <BookOwner key={owner.userid} {...owner}/>
                        </SwiperSlide>
                        )
                    )}
                    </Swiper>
                </div>
                
        </div>
        )

};


export default Book;