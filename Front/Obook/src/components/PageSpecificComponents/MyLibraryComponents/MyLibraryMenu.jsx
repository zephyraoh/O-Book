import { NavLink } from "react-router-dom";
import Button from "../../GlobalComponents/Button";
import './styles.scss';




const MyLibraryMenu = ()=>{

    return (
        <nav className="menu">
            <Button type="button" value = "Ma Bibliothèque"  name= "Ma Bibliothèque"  />
            <Button type="button" value = "Mes Prêts"  name= "Mes Prêts"/>
            <Button type="button" value = "Mes Emprunts"  name= "Mes Emprunts"/>
                {/*
                Ma Bibliothèque 
                Mes Prêts
                Mes Emprunts  */}
          
        </nav>    
    )
    
};



export default MyLibraryMenu;
