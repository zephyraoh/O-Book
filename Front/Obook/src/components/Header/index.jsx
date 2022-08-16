const Header=()=>{
    
        return (
        <div>
            <ul>
                <li>Accueil</li>
                <li>Bibliothèque</li>
            </ul>
            <form action="">
                <input type="text" />
                <button>Valider</button>
                <input type="radio" name="booksearch" id="all" />
                <input type="radio" name="booksearch" id="title" />
                <input type="radio" name="booksearch" id="author" />
                <input type="radio" name="booksearch" id="genre" />
            </form>
        </div>
        )
    }
    export default Header;