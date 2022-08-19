import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setSearchField } from '../../actions/books';
import { axiosBooksApi } from '../../utils/axios';
import Button from '../LoginModal/Button';
import SearchFilters from './SearchFilters';

const SearchForm=()=>{


    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setSearchField(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getBooks())
    
    };

    const value = useSelector(state => state.search.searchValue);
   
    
    return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" className="search-form__input" value={value} onChange={handleChange}/>
        <Button name="Valider" value="searchButton" className="search-button" />
        <SearchFilters />
    </form>
    )
}
export default SearchForm;

