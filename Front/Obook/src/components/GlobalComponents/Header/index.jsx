import { LoginModal } from './LoginModal/LoginModal';
import SearchForm from "../SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../../actions/user';
import Button from '../Button';
import { toggleSignInModal } from '../../../actions/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';


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
        <div className='flex flex-wrap justify-evenly items-center h-24 border-y-2 border-[#292F44] border-solid'>
            <div className='flex text-3xl p-4 text-[#292F44] font-semibold items-center'><h2>O'BOOK</h2><FontAwesomeIcon className='p-3' icon="fa-book-open" /></div>     
            <SearchForm /> 
        {isLogged?
            <div className='flex items-center'>
                <div className='flex flex-col'>
                    <NavLink to = "/account"><FontAwesomeIcon className='h-10 text-[#292F44] block pl-8' icon= "user" />Mon compte</NavLink>
                </div>
                <button className='p-3 m-3 bg-[#292F44] text-[#F5F5F5] rounded-md h-1/2' name="Logout button" onClick={handleLogOut}>Logout button</button>
            </div>
        :
        <>
            {!isSignModalToggled&&<button className='p-3 m-3 bg-[#292F44] text-[#F5F5F5] rounded-md' name="Connexion/inscription" onClick={handleSignButton}>Connexion/inscription</button>}
            
            {isSignModalToggled && <LoginModal />} 
            </>
        }
        </div>
        </>
        )
    }
    export default Header;