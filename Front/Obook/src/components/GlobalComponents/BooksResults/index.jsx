import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, fetchLatestBooks } from '../../../actions/books';
import BookPreview from './BookPreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import './styles.scss';
// import required modules
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';

const BooksResults = () => {
  
  const dispatch = useDispatch();
    
  useEffect(() => {
      dispatch(fetchLatestBooks());
  }, []);
  
  const latestBooks = useSelector(state=>state.books.booksData.searchedBooks);

  return(
  <div className="m-3">
    <p className="mobile:text-lg desktop:text-2xl mb-3">Les derniers livres ajoutés</p>
    <Swiper 
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
          575: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}
    >
        {latestBooks.map((book) =>
          (
          <SwiperSlide><BookPreview key={book.isbn} {...book}/></SwiperSlide>
          )
        )}
    </Swiper>

  </div>
  )

};

export default BooksResults;