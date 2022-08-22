import { NavLink } from "react-router-dom";
import './styles.scss';




const MyLibraryMenu = ()=>{

    return (
        <nav className="menu">
            <Button type="text" value = "Ma Bibliothèque" className = {className} name= "Ma Bibliothèque" />
            <Button type="text" value = "Mes Prêts" className = {className} name= "Mes Prêts"/>
            <Button type="text" value = "Mes Emprunts" className = {className} name= "Mes Emprunts"/>
                {/*
                Ma Bibliothèque 
                Mes Prêts
                Mes Emprunts  */}
          
        </nav>    
    )
    
};



export default MyLibraryMenu;
