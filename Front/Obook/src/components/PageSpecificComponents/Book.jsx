import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DOMPurify from 'dompurify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneBookDetails } from '../../actions/books';
import { useParams } from 'react-router-dom';

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

const Book = ()=>{
    const params = useParams();
    const dispatch = useDispatch();
    

    const book = useSelector(state => state.books.visitedBookPage);
    useEffect(() => {
        dispatch(getOneBookDetails(params.id));
    }, []);

    const cleanSynopsis = DOMPurify.sanitize(book?.synopsis);
    const synopsisCleanHtml = removeTags(cleanSynopsis);
    

        return(
         
            <div className='flex mx-auto my-6 w-11/12 justify-center'>
                <img className='desktop:w-1/4 desktop:min-w-[200px] desktop:h-3/4 desktop:max-w-[320px] desktop:max-h-[450px] mobile:w-[120px] mobile:h-[180px] my-5' src={book?.image} alt="" />
                <div className='flex flex-col items-start m-6 w-7/8'>
                    <h1 className='desktop:text-3xl mobile:text-lg font-bold mb-5'>{book?.title}</h1>
                    <h3 className='my-3'>{book?.authors} - {book?.date_published}</h3>
                    <h3 className='my-3'>{book?.publisher}</h3>
                    <h3 className='font-semibold my-3'>Résumé</h3>
                    <p>{synopsisCleanHtml ? synopsisCleanHtml : 'Résumé indisponible'}</p>
                    <button className='p-2 px-3 my-3 place-self-center rounded bg-[#292F44] text-[#F5F5F5]'>Ajouter à ma bibliothèque</button>
                </div>
            </div>
        )


};


export default Book;