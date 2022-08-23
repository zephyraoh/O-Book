//React Components
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'

//Icons Components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBookOpen, faHouse, faUser, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass, faBookOpen, faHouse, faUser,faCircleXmark);

//Actions components
import { getMemberProfile } from '../../actions/user';

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
import { useDispatch } from 'react-redux';



function App() {
  //local state hooks
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [isAccountPage, setAccountPage]= useState(false);
  const dispatch = useDispatch()
  
const handleClick = (e) => {
  console.log("i got clicked !")
  dispatch(getMemberProfile(e.target.value));
}

  return (
    <div className="App">
     <Header /> 
     <button value ="zephyr" name="profile of user Zephyr" onClick={handleClick}>Test button</button>
     <Routes>
       <Route path="/" element= {<Home />} />
       <Route path="/account" element= {<Account />} />
       <Route path="/mylibrary" element= {<MyLibrary />} />
       <Route path="/book/:id" element= {<Book />} />
       <Route path="/library/:id" element= {<Library />} />
       <Route path="*" element= {<Error404 />} />
     </Routes>
     {/* DesktopMenu will show anywhere if logged, except on AccountPage */}
     {isLoggedIn && !isAccountPage &&<DesktopMenu/>}
     <MobileMenu/>
     <Footer />
    </div>
  )
}

export default App;
