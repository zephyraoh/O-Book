import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../actions/books";

const Library = ()=>{

    const params = useParams();
    const dispatch = useDispatch();
    
    const books = useSelector(state => state.books.booksData.visitedProfileBooks);
    useEffect(() => {
        dispatch(getOneBookDetails(params.id));
    }, []);

    return(
        <p>Visited library component</p>
    
    
    )

};


export default Library;