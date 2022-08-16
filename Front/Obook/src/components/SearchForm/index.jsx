import { useDispatch } from 'react-redux';

const SearchForm=()=>{


    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        console.log("something changed !")
        dispatch(setSearchField(e.target.value))
        
    }

   
    
    return (
    <form action="">
        <input type="text" className="search-form__input" value={value} onChange={handleChange}/>
        <button>Valider</button>
        <div>
            <label htmlFor="all">Tous</label>
            <input type="radio" name="booksearch" id="all" />
            <label htmlFor="title">Titre</label>
            <input type="radio" name="booksearch" id="title" />
            <label htmlFor="author">Auteur</label>
            <input type="radio" name="booksearch" id="author" />
            <label htmlFor="genre">Genre</label>
            <input type="radio" name="booksearch" id="genre" />
        </div>
    </form>
    )
}
export default SearchForm;

