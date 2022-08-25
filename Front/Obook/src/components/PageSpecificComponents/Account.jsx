import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserField, SetUserLabel } from "../../actions/user";
import Axios from "axios";
import { useState } from "react";
import Field from "../GlobalComponents/Header/LoginModal/Field";

const Account = () =>{
    // hooks
    const dispatch = useDispatch();
    
    // const
    const lastName=  useSelector(state => state.user.lastName); 
    const firstName= useSelector(state => state.user.firstName); 
    const userName= useSelector(state => state.user.username);
    const password = useSelector(state => state.user.password); 
    const newPassword = useSelector(state => state.user.newPassword);
    const newPasswordConfirm = useSelector(state => state.user.newPasswordConfirm);
    const userImg = useSelector(state=>state.user.profilePicture);

    const biography = useSelector(state => state.user.biography);
    const zipcode = useSelector(state => state.user.zipcode);
    const localisation = useSelector(state => state.user.localisation);  

    const user = useSelector(state=>state.user)    

    // fonctions
    const [imageSelected, setImageSelected] = useState("")
    // console.log("notre selected image", imageSelected)
    const uploadImage = (e)=>{
        // A dispatch dans une action middleware (auth?)
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "visitor of Obook website")
        
        Axios.post("https://api.cloudinary.com/v1_1/obook/upload",formData)
        .then((response)=>{
            console.log("J'ai fait une requête à cloudinary !")
            const profilePicture = {profilePicture: response.data.secure_url};
            console.log(profilePicture);
            dispatch(setUserData(profilePicture));
        });
    };
    const onChange = (value, name) => {
		dispatch(setUserField(value, name));
        console.log("NOUVELLE VALUE DU", name, "==>",value)
    }
    const handleClick = (e) => {
        console.log(`button ${e.target.value} clicked`);
        dispatch(SetUserLabel(e.target.value))

    }
    const confirmInformations = ()=> {
        console.log("bouton CONFIRM cliqué")
        console.log(user)
    }
    return (
    <>
        

    {/* Upload D' images */}
    <img src={userImg}></img>
    <input type="file" onChange={event=>setImageSelected(event.target.files[0])}/>
    <button name="upload Image" onClick={uploadImage}>Upload Image</button>
    <Field  type = "text" name = "biography" placeholder = "Description" onChange={onChange}  />
    <Field  type = "text" name = "localisation" placeholder = "Région" onChange={onChange}  />
    <Field   type = "text" name = "zipcode" placeholder = "Code postal" onChange={onChange}  /> 


    {/* LABELS BUTTONS */}
        <button value ="Romans" name="profileLabelButton" onClick={handleClick}>Romans</button>
        <button value = 'Science-Fiction & Fantasy' name="profileLabelButton" onClick={handleClick}>Science-Fiction & Fantasy</button>
        <button value ="Polar & Thriller" name="profileLabelButton" onClick={handleClick}>Polar & Thriller</button>
        <button value ="BD/Comics & Manga" name="profileLabelButton" onClick={handleClick}>BD/Comics & Manga</button>
        <button value ="Littérature classique" name="profileLabelButton" onClick={handleClick}>Littérature classique</button>
        <button value ="Enfants & Jeunesse" name="profileLabelButton" onClick={handleClick}>Enfants & Jeunesse</button>
        <button value ="Savoir" name="profileLabelButton" onClick={handleClick}>Savoir</button>
        <button value ="Loisirs" name="profileLabelButton" onClick={handleClick}>Loisirs</button>
        <button value ="Autres" name="profileLabelButton" onClick={handleClick}>Autres</button>


        {/* informations dures */}
         <Field  value = {lastName} type = "text" name = "lastName" placeholder = "Nom" onChange={onChange}  />
         <Field  value = {firstName} type = "text" name = "firstName" placeholder = "Prénom" onChange={onChange} />
         <Field  value = {userName} type = "text" name = "username" placeholder = "Pseudonyme" onChange={onChange}/>
         <Field  value = {password} type = "text" name = "password" placeholder = "ancien Mot de passe" onChange={onChange}/>
         <Field  value = {newPassword} type = "password" name = "newPassword" placeholder = "Nouveau mot de passe" onChange={onChange}/>
         <Field  value = {newPasswordConfirm} type = "password" name = "newPasswordConfirm" placeholder = "Confirmation mdp" onChange={onChange} />



         <button name="Valider" onClick={confirmInformations}>VALIDER LES INFORMATIONS</button>
    </>
    )
};



export default Account;