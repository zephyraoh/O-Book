//React Components
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import {Navigate } from 'react-router-dom';

//Icons Components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBookOpen, faHouse, faUser, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass, faBookOpen, faHouse, faUser,faCircleXmark);

//Actions components
import { getMemberProfile, toggleSignInModal } from '../../actions/user';

//App Components
import BooksResults from '../GlobalComponents/BooksResults';
import Header from '../GlobalComponents/Header';
import DesktopMenu from '../GlobalComponents/DeskTopMyLibraryMenu';
import Footer from '../GlobalComponents/Footer';
import MobileMenu from '../GlobalComponents/Footer/MobileMenu';

//Page Components
import Home from '../PageSpecificComponents/Home';
import Account from '../PageSpecificComponents/Account';
import MyLibrary from '../PageSpecificComponents/MyLibrary';
import Book from '../PageSpecificComponents/Book';
import Library from '../PageSpecificComponents/Library';
import Error404 from '../PageSpecificComponents/Error404';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  //local state hooks
  const isLogged = useSelector((state)=>state.user.isLogged);
  const [isAccountPage, setAccountPage]= useState(false);
  const dispatch = useDispatch();
  
const handleClick = (e) => {
  console.log("i got clicked !")
  dispatch(getMemberProfile(e.target.value));
}

const isSignModalToggled =useSelector (state=>state.user.signInModal)


  return (
    <div className="App">
     <Header className="bg-gray-400"/> 
     <button value ="zephyr" name="profile of user Zephyr" onClick={handleClick}>Test button</button>
     <Routes>
       <Route path="/" element= {<Home />} />
       <Route
       path="/mylibrary"
       element={isLogged? 
        <MyLibrary/> 
        :  <Navigate to='/'/>
      } 
       />
       
      <Route 
      path="/account" 
      element= {isLogged?<Account /> : <Navigate to='/'/>} />
       <Route path="/book/:id" element= {<Book />} />
       <Route path="/library/:id" element= {<Library />} />
       <Route path="*" element= {<Error404 />} />
     </Routes>
     {/* DesktopMenu will show anywhere if logged, except on AccountPage */}
     {isLogged && !isAccountPage &&<DesktopMenu/>}
     <MobileMenu/>
     <Footer />
    </div>
  )
}

export default App;
