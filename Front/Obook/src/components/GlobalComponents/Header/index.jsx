import { LoginModal } from './LoginModal/LoginModal';
import SearchForm from "../SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../../actions/user';
import Button from '../Button';
import { toggleSignInModal } from '../../../actions/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        <div className='flex justify-evenly items-center h-24 border-y border-[#292F44] border-solid'>
            <h2 className='text-2xl p-4 font-semibold'><FontAwesomeIcon icon="fa-book-open" />O'BOOK</h2>      
        {isLogged?
            <button className='p-3 m-3 bg-[#292F44] text-[#F5F5F5] rounded-md' name="Logout button" onClick={handleLogOut}>Logout button</button>
        :
        <>
            {!isSignModalToggled&&<button className='p-3 m-3 bg-[#292F44] text-[#F5F5F5] rounded-md' name="Connexion/inscription" onClick={handleSignButton}>Connexion/inscription</button>}
            <SearchForm />
            {isSignModalToggled && <LoginModal />} 
            </>
        }       
        </div>
        </>
        )
    }
    export default Header;