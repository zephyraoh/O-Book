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
    <form className='mobile:hidden desktop:block' onSubmit={handleSubmit}>
        <div className= 'flex h-8'>
            <SearchBar className= "search-form__input rounded-l-md"/>
            <Button type ="submit" name="Valider" value="searchButton" className="search-button px-2 rounded-r-md bg-[#292F44] text-[#F5F5F5]" />
        </div>
        <SearchFilters />
    </form>
    )
}
export default SearchForm;

