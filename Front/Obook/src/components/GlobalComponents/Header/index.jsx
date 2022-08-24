import { LoginModal } from './LoginModal/LoginModal';
import SearchForm from "../SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../../actions/user';

const Header=()=>{

    const dispatch = useDispatch();
    
    const handleLogOut = (e) => {
        console.log("LOGOUT !!")
        dispatch(logOut());
    }
    console.log(useSelector(state=>state.user))
    const isLogged = useSelector(state => state.user.isLogged);
        return (
        <>
        <button name="logout" onClick={handleLogOut}>LOGOUT JOKER BUTTON</button>
            <SearchForm />
            {/* attention pour la suite : ce sont les boutons de connexion qui doivent s'afficher ou non en fonction du booléen isLogged, et ensuite la modale onclick des boutons */}
            {!isLogged && <LoginModal />} 
        </>
        )
    }
    export default Header;