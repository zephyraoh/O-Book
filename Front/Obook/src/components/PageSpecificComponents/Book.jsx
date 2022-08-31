import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DOMPurify from 'dompurify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneBookDetails } from '../../actions/books';
import { useParams } from 'react-router-dom';

const Book = ( {
    // title,
    // authors,
    // synopsis,
    // edition,
    // date_published,
    // isbn,
    // image,
} )=>{
    const params = useParams();
    const dispatch = useDispatch();
    

    const book = useSelector(state => state.books.visitedBookPage);
    useEffect(() => {
        dispatch(getOneBookDetails(params.id));
    }, []);

    console.log(book)
    const cleanSynopsis = DOMPurify.sanitize(book?.synopsis);
    
    

        return(
         
            <div className='flex mx-auto my-6 w-11/12 justify-center'>
                <img className='desktop:w-1/4 desktop:h-3/4 desktop:max-w-[320px] desktop:max-h-[450px] mobile:w-[120px] mobile:h-[180px] my-5' src={book?.image} alt="" />
                <div className='flex flex-col items-start m-6 w-7/8'>
                    <h1 className='desktop:text-3xl mobile:text-lg font-bold mb-5'>{book?.title}</h1>
                    <h3 className='my-5'>{book?.authors} - {book?.date_published}</h3>
                    <h3 className='my-5'>{book?.publisher}</h3>
                    <h3>Résumé</h3>
                    <p>{cleanSynopsis ? cleanSynopsis : 'Résumé indisponible'}</p>
                    <button className='p-2 px-3 place-self-center rounded bg-[#292F44] text-[#F5F5F5]'>Ajouter à ma bibliothèque</button>
                </div>
            </div>
        )


};


export default Book;