import { NavLink } from "react-router-dom";
import { useState } from "react";
import './styles.scss';

const Menu = ()=> {
    // const
    const [libraryFilter, setLibraryFilter] =useState("allMyBooks")
    // fonctions
    const handleClick = (e) =>{
        setLibraryFilter(e.target.value)
        
    }
    // <nav className="menu">
    //     <NavLink
    //         to="/Ma_bibliothèque">
    //          <button value = "allMyBooks" name = "myLibrary" >Ma Bibliothèque</button>
    //     </NavLink>
    //     <NavLink
    //         to="/Demandes_en_cours">
    //         Demandes de prêt
    //     </NavLink>
    //     <NavLink
    //         to="/Prêts">
    //         Mes Prêts
    //     </NavLink>
    //     <NavLink
    //         to="/Emprunts">
    //         Mes Emprunts 
    //     </NavLink>
    // </nav>    
return (
<></>
)

};

export default Menu