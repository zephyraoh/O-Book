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
import { Pagination, Navigation } from "swiper";

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
        <div className='flex desktop:flex-row mobile:flex-col my-6 w-full justify-center pb-20'>
            <div className='flex desktop:mx-12 mobile:mx-2 desktop:w-3/4 mobile:w-full justify-center'>
                <img className='rounded-md desktop:w-1/4 desktop:min-w-[300px] desktop:min-h-[450px] desktop:max-w-[320px] desktop:max-h-[450px] mobile:w-[120px] mobile:h-[180px] my-5' src={book?.image} alt="" />
                <div className='flex flex-col items-start desktop:mr-6 mobile:mr-0 desktop:pl-8 mobile:pl-2 mobile:max-w-[240px] mobile:min-w-[240px] desktop:max-w-1/2 desktop:min-w-[700px]'>
                    <h1 className='desktop:text-3xl mobile:text-lg font-bold desktop:mb-5 mobile:mb-1 text-ellipsis break-words'>{book?.title?.split('(')[0]}</h1>
                    <h3 className='desktop:my-3 mobile:my-1'>{book?.authors} - {book?.date_published}</h3>
                    <h3 className='desktop:my-3 mobile:my-1'>{book?.publisher}</h3>
                    <h3 className='font-semibold desktop:my-3 mobile:my-1'>Résumé :</h3>
                    <p>{synopsisCleanHtml ? synopsisCleanHtml : 'Résumé indisponible'}</p>
                    <button className='p-2 mt-5 px-3 my-3 place-self-center rounded bg-[#292F44] text-[#F5F5F5]' value={book?.isbn} onClick={handleAddBookAction}>Ajouter à ma bibliothèque</button>
                </div>
            </div>
                <div className='desktop:w-1/4 mobile:w-full flex flex-col items-center px-auto h-3/4'>
                    <h3 className='font-bold desktop:text-2xl mobile:text-xl my-4'>Ils possèdent ce livre :</h3>
                    {/* <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        spaceBetween={2}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        
                    > */}
                    {bookOwners.map((owner) =>
                        (
                        // <SwiperSlide>   
                            <BookOwner key={owner.userid} {...owner}/>
                        // </SwiperSlide>
                        )
                    )}
                    {/* </Swiper> */}
                </div>
                
        </div>
        )

};


export default Book;


{/* <Swiper 
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        spaceBetween={2}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          1600: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          525: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}
    >
        {latestBooks.map((book) =>
          (
          <SwiperSlide key={book.isbn}><BookPreview key={book.isbn} {...book}/></SwiperSlide>
          )
        )}
    </Swiper> */}