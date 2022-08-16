import { useState } from 'react'
import './App.css'
import BooksResults from '../BooksResults';
import Header from '../Header';
import Menu from '../MyLibraryMenu';
import Footer from '../Footer';



function App() {
 const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
     <Header /> 
     {/* <Routes>
       <Route path="/" element={<home />} />
       <route path="/"
     </Routes> */}
     <BooksResults />
     {isLoggedIn && <Menu/>}
     <Footer />
    </div>
  )
}

export default App

{/* Page d’accueil → “/” 
Page de profil utilisateur → “/account”
Bibliothèque personnelle de l’utilisateur → “/mylibrary”
Détails d’un livre → “/book/:id”
Bibliothèque d’un autre utilisateur → “/library/:id”
Page 404 → “/404” */}
