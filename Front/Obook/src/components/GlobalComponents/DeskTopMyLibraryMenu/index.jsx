import { NavLink } from "react-router-dom";

import './styles.scss';

const Menu = ()=> {
return (
    <nav className="menu">
        <NavLink
            to="/Ma_bibliothèque">
            Ma Bibliothèque 
        </NavLink>
        <NavLink
            to="/Demandes_en_cours">
            Demandes de prêt
        </NavLink>
        <NavLink
            to="/Prêts">
            Mes Prêts
        </NavLink>
        <NavLink
            to="/Emprunts">
            Mes Emprunts 
        </NavLink>
    </nav>    
)

};

export default Menu