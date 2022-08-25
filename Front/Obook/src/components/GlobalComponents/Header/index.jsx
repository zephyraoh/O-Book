import { LoginModal } from './LoginModal/LoginModal';
import SearchForm from "../SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../../actions/user';
import Button from '../Button';
import { toggleSignInModal } from '../../../actions/user';

const Header=()=>{

    const dispatch = useDispatch();
    
    const handleLogOut = (e) => {
        console.log("LOGOUT !!")
        dispatch(logOut());
    }

    const handleSignButton = ()=>{
        console.log('sign button clicked');
        console.log("on veut dispatch toggleSignInModal(true)!")
        dispatch(toggleSignInModal(true))
    }
    const isLogged = useSelector(state => state.user.isLogged);
    const isSignModalToggled =useSelector (state=>state.user.signInModal)
        return (
        <>
        {isLogged?
            <button name="Logout button" onClick={handleLogOut}>Logout button</button>
        :
        <>
            {!isSignModalToggled&&<button name="Connexion/inscription" onClick={handleSignButton}>Connexion/inscription</button>}
            <SearchForm />
            {isSignModalToggled && <LoginModal />} 
            </>
        }       
        </>
        )
    }
    export default Header;