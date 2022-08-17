import { LoginModal } from "../LoginModal/LoginModal";
import SearchForm from "../SearchForm";

const isLogged = useSelector(state => state.user.isLogged);

const Header=()=>{
    
        return (
        <>
            <ul>
                <li>Accueil</li>
                <li>Bibliothèque</li>
            </ul>
            <SearchForm />
            {/* attention pour la suite : ce sont les boutons de connexion qui doivent s'afficher ou non en fonction du booléen isLogged, et ensuite la modale onclick des boutons */}
            {!isLogged && <LoginModal></LoginModal>} 
        </>
        )
    }
    export default Header;