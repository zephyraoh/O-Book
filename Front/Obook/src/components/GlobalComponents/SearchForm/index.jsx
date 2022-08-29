import { useDispatch } from 'react-redux';
import { searchBooks } from '../../../actions/books';
import Button from '../Button';
import SearchFilters from './SearchFilters';
import SearchBar from './SearchBar/SearchBar';

const SearchForm=()=>{


    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchBooks())
    
    };

    
   
    
    return (
    <form className='mobile:hidden' onSubmit={handleSubmit}>
        <div className= 'flex'>
            <SearchBar className= "search-form__input rounded-md h-6 w-2/3"/>
            <Button type ="submit" name="Valider" value="searchButton" className="search-button" />
        </div>
        <SearchFilters />
    </form>
    )
}
export default SearchForm;

