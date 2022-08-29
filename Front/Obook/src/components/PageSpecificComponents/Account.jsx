import { useDispatch, useSelector } from "react-redux";
import { setUserData, SetUserLabel, setUserModifyAccountField } from "../../actions/user";
import Axios from "axios";
import { useState } from "react";
import Field from "../GlobalComponents/Header/LoginModal/Field";

const Account = () =>{
    // hooks
    const dispatch = useDispatch();
    
    // const
    //NewModifications
    const newProfilePicture = useSelector(state => state.user.accountModifications.newProfilePicture);
    const newFirstName = useSelector(state => state.user.accountModifications.newFirstName);
    const newLastName = useSelector(state=>state.user.accountModifications.newLastName);
    const newUsername = useSelector(state=>state.user.accountModifications.newUsername);
    const newBiography = useSelector(state=>state.user.accountModifications.newBiography);
    const newLocalisation = useSelector(state=>state.user.accountModifications.newLocalisation);
    const newZipcode = useSelector(state=>state.user.accountModifications.newZipcode);
    const oldPassword = useSelector(state=>state.user.accountModifications.oldPassword);
    const newPassword = useSelector(state=>state.user.accountModifications.newPassword);
    const newPasswordConfirm = useSelector(state=>state.user.accountModifications.newPasswordConfirm);
    const accountModifications = useSelector(state=>state.user.accountModifications)
    //current user
    const userImg = useSelector(state=>state.user.profilePicture);
    // fonctions
   
    const [imageSelected, setImageSelected] = useState("");
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
            dispatch(setUserData(accountModifications.newProfilePicture));
        });
    };
    const handleChange = (value, name) => {
		dispatch(setUserModifyAccountField(value, name));
        console.log("NOUVELLE VALUE DU", name, "==>",value)
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(`button ${e.target.value} clicked`);
        dispatch(SetUserLabel(e.target.value))

    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("SUBMIT");
    }

    return (
    <form>
    
    {/* Upload D' images */}
    <img src={userImg}></img>
    <input type="file" onChange={event=>setImageSelected(event.target.files[0])}/>
    <button name="upload Image" onClick={uploadImage}>Upload Image</button>

    {/* Infos "secondaires" */}
    <Field value={newBiography} type="text" name="newBiography" placeholder="Bio" onChange={handleChange}/>
    <Field value={newLocalisation}type="text" name="newLocalisation" placeholder="Région" onChange={handleChange}/>
    <Field value={newZipcode} type="text" name="newZipcode" placeholder="Code postal" onChange={handleChange}/> 

    {/* LABELS BUTTONS */}
        <button value="Romans" name="profileLabelButton" onClick={handleClick}>Romans</button>
        <button value="Science-Fiction & Fantasy" className="profileLabelButton" onClick={handleClick}>Science-Fiction & Fantasy</button>
        <button value="Polar & Thriller" className="profileLabelButton" onClick={handleClick}>Polar & Thriller</button>
        <button value="BD/Comics & Manga" className="profileLabelButton" onClick={handleClick}>BD/Comics & Manga</button>
        <button value="Littérature classique" className="profileLabelButton" onClick={handleClick}>Littérature classique</button>
        <button value="Enfants & Jeunesse" className="profileLabelButton" onClick={handleClick}>Enfants & Jeunesse</button>
        <button value="Savoir" className="profileLabelButton" onClick={handleClick}>Savoir</button>
        <button value="Loisirs" className="profileLabelButton" onClick={handleClick}>Loisirs</button>
        <button value="Autres" className="profileLabelButton" onClick={handleClick}>Autres</button>

        {/* informations dures */}
         <Field value={newLastName} type="text" name="newLastName" placeholder="Nom" onChange={handleChange}/>
         <Field value={newFirstName} type="text" name="newFirstName" placeholder="Prénom" onChange={handleChange}/>
         <Field value={newUsername} type="text" name="newUsername" placeholder="Pseudonyme" onChange={handleChange}/>
         <Field value={oldPassword}type="password" name="oldPassword" placeholder="ancien Mot de passe" onChange={handleChange}/>
         <Field value={newPassword} type="password" name="newPassword" placeholder="Nouveau mot de passe" onChange={handleChange}/>
         <Field value={newPasswordConfirm} type="password" name="newPasswordConfirm" placeholder="Confirmation du mot de passe" onChange={handleChange}/>

         <button type="submit" onClick={handleSubmit}>Confirmer</button>
    </form>
    )
};



export default Account;