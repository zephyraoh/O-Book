import { useDispatch } from "react-redux"
import { setSelectedFilter } from "../../../actions/books"
import { useSelector } from "react-redux"
const SearchFilters = ()=> {

    const dispatch =useDispatch() 
    
    const handleChange= (e)=>{
        dispatch(setSelectedFilter(e.target.value));
    }

    return (
        <div>
            <input type="radio" value= "all" name="booksearch" id="all" onChange = {handleChange} /> 
            <label htmlFor="all">Tous</label>
            <input type="radio" value= "title" name="booksearch" id="title" onChange = {handleChange}/>
            <label htmlFor="title">Titre</label>
            <input type="radio" value= "author" name="booksearch" id="author" onChange = {handleChange}/>
            <label htmlFor="author">Auteur</label>
            <input type="radio" value = "genre" name="booksearch" id="genre" onChange = {handleChange}/>
            <label htmlFor="genre">Genre</label>
        </div>
    )
}

export default SearchFilters;