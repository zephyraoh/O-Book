import { setSearchField } from "../../../../actions/books";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const SearchBar =({className})=>{
    
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setSearchField(e.target.value))
    }
    const value = useSelector(state => state.search.searchValue);

    return (        
        <input type="text" className= {className} value={value} onChange={handleChange}/>
    )
}

export default SearchBar;
