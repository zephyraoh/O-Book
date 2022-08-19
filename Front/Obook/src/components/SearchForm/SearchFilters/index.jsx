const SearchFilters = ()=> {


    return (
        <div>
            <label htmlFor="all">Tous</label>
            <input type="radio" defaultChecked name="booksearch" id="all" /> 
            <label htmlFor="title">Titre</label>
            <input type="radio" name="booksearch" id="title" />
            <label htmlFor="author">Auteur</label>
            <input type="radio" name="booksearch" id="author" />
            <label htmlFor="genre">Genre</label>
            <input type="radio" name="booksearch" id="genre" />
        </div>
    )
}

export default SearchFilters;