import { useDispatch } from "react-redux"
import { setSelectedFilter } from "../../../../actions/books"
const SearchFilters = ()=> {

    const dispatch =useDispatch() 
    
    const handleChange= (e)=>{
        dispatch(setSelectedFilter(e.target.value));
    }

    return (
        <div className='text-[#292F44] p-1'>
            <input className='m-1' type="radio" value= "all" name="booksearch" defaultChecked id="all" onChange = {handleChange} /> 
            <label htmlFor="all">Tous</label>
            <input className='m-1' type="radio" value= "title" name="booksearch" id="title" onChange = {handleChange}/>
            <label htmlFor="title">Titre</label>
            <input className='m-1' type="radio" value= "author" name="booksearch" id="author" onChange = {handleChange}/>
            <label htmlFor="author">Auteur</label>
            <input className='m-1' type="radio" value= "ISBN" name="booksearch" id="ISBN" onChange = {handleChange}/>
            <label htmlFor="ISBN">ISBN</label>
        </div>
    )
}

export default SearchFilters;