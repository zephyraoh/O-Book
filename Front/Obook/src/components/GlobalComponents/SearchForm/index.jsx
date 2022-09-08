import { useDispatch, useSelector } from 'react-redux';
import { searchBooks, setSearchField, searchISBN, setLoading } from '../../../actions/books';
import Button from '../Button';
import SearchFilters from './SearchFilters';
import SearchBar from './SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchForm=()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchFilter = useSelector(state => state.books.selectedSearchFilter);
    const searchValue = useSelector(state => state.books.searchValue);

    const endSearch = () => {
        dispatch(setSearchField(''));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        {searchFilter === "ISBN"? dispatch(searchISBN) : dispatch(searchBooks())};
        {searchFilter === "ISBN"? navigate(`/book/${searchValue}`): navigate('/search')};
        endSearch();
        
    };

    
   
    
    return (
    <form className='mobile:hidden desktop:block hover:drop-shadow-lg duration-100 ease-in-out min-w-[300px]' onSubmit={handleSubmit}>
        <div className= 'flex h-8'>
            <SearchBar className= "pl-2 search-form__input rounded-l-md w-full"/>
            <Button type ="submit" name="Valider" value="searchButton" className="search-button px-2 rounded-r-md bg-[#292F44] text-[#F5F5F5]" />
        </div>
        <SearchFilters />
    </form>
    )
}
export default SearchForm;

