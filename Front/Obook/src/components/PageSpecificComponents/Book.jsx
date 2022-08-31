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

    const cleanSynopsis = DOMPurify.sanitize(book?.synopsis);
    console.log(cleanSynopsis);
    

        return(
         
            <div className='flex m-8'>
                <img src={book?.image} alt="" />
                <div className='flex flex-col'>
                    <h1>{book?.title}</h1>
                    <h3>{book?.authors} - {book?.date_published}</h3>
                    <h3>{book?.edition}</h3>
                    <h3>Résumé</h3>
                    <p>{cleanSynopsis}</p>
                    <button className='p-2 px-3 m-3 rounded bg-[#292F44] text-[#F5F5F5]'>Ajouter à ma bibliothèque</button>
                </div>
            </div>
        )


};


export default Book;