import { useDispatch, useSelector } from "react-redux";
import { setUserData, SetUserLabel, setUserModifyAccountField, sendModifiedInfos} from "../../actions/user";
import Axios from "axios";
import { useState } from "react";
import Field from "../GlobalComponents/Header/LoginModal/Field";

const Account = () =>{
    // hooks
    const dispatch = useDispatch();
    
    // const
    //NewModifications
    const newProfilePicture = useSelector(state => state.user.accountModifications.newProfilePicture);
    const newFirstName = useSelector(state => state.user.accountModifications.firstname);
    const newLastName = useSelector(state=>state.user.accountModifications.lastname);
    const newUsername = useSelector(state=>state.user.accountModifications.username);
    const newBiography = useSelector(state=>state.user.accountModifications.biography);
    const newLocalisation = useSelector(state=>state.user.accountModifications.localisation);
    const newZipcode = useSelector(state=>state.user.accountModifications.zipcode);
    const oldPassword = useSelector(state=>state.user.accountModifications.oldPassword);
    const newPassword = useSelector(state=>state.user.accountModifications.password);
    const newPasswordConfirm = useSelector(state=>state.user.accountModifications.passwordConfirm);
    const accountModifications = useSelector(state=>state.user.accountModifications)
   
    const userImg = useSelector(state=>state.user.profile_picture);
    // fonctions
   
    const [imageSelected, setImageSelected] = useState("");
    // console.log("notre selected image", imageSelected)
    const uploadImage = (e)=>{
        e.preventDefault();
        // A dispatch dans une action middleware (auth?)
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "visitor of Obook website")
        
        Axios.post("https://api.cloudinary.com/v1_1/obook/upload",formData)
        .then((response)=>{
            // dispatch(setUserModifyAccountField(response.data.secure_url, newProfilePicture));
            dispatch(sendModifiedInfos({
                "profile_picture": response.data.secure_url,
            }))
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
        console.log(accountModifications);

        // Object.keys(data).forEach(key => {
        //     data[key] = data[key] || '';
        // }
        const modifiedInfo = {
            ...accountModifications,
        }
       Object.keys(modifiedInfo).forEach(key=> {
        if (modifiedInfo[key] === ''){
            delete modifiedInfo[key];
        }
        })
        console.log("post traitement de l'info", modifiedInfo);

        dispatch(sendModifiedInfos({
            ...modifiedInfo,

        }))
    }

    return (
    <form>
    
    {/* Upload D' images */}
    <div className="bg-#ff253a flex justify-center h-full mt-5">
        <img className="rounded-full h-40 w-40" src={userImg}></img>
    </div>
    
    <input type="file" onChange={event=>setImageSelected(event.target.files[0])}/>
    <button name="upload Image" onClick={uploadImage}>Upload Image</button>

    {/* Infos "secondaires" */}
    <Field value={newBiography} type="text" name="biography" placeholder="Bio" onChange={handleChange} className="w-1/2"/>
    <Field value={newLocalisation}type="text" name="localisation" placeholder="Région" onChange={handleChange}/>
    <Field value={newZipcode} type="text" name="zipcode" placeholder="Code postal" onChange={handleChange}/> 

    {/* LABELS BUTTONS */}
        {/* <button value="Romans" name="profileLabelButton" onClick={handleClick}>Romans</button>
        <button value="Science-Fiction & Fantasy" className="profileLabelButton" onClick={handleClick}>Science-Fiction & Fantasy</button>
        <button value="Polar & Thriller" className="profileLabelButton" onClick={handleClick}>Polar & Thriller</button>
        <button value="BD/Comics & Manga" className="profileLabelButton" onClick={handleClick}>BD/Comics & Manga</button>
        <button value="Littérature classique" className="profileLabelButton" onClick={handleClick}>Littérature classique</button>
        <button value="Enfants & Jeunesse" className="profileLabelButton" onClick={handleClick}>Enfants & Jeunesse</button>
        <button value="Savoir" className="profileLabelButton" onClick={handleClick}>Savoir</button>
        <button value="Loisirs" className="profileLabelButton" onClick={handleClick}>Loisirs</button>
        <button value="Autres" className="profileLabelButton" onClick={handleClick}>Autres</button> */}

        {/* informations dures */}
         {/* <Field value={newLastName} type="text" name="lastname" placeholder="Nom" onChange={handleChange}/>
         <Field value={newFirstName} type="text" name="firstname" placeholder="Prénom" onChange={handleChange}/>
         <Field value={newUsername} type="text" name="username" placeholder="Pseudonyme" onChange={handleChange}/>
         <Field value={oldPassword}type="password" name="oldPassword" placeholder="ancien Mot de passe" onChange={handleChange}/>
         <Field value={newPassword} type="password" name="password" placeholder="Nouveau mot de passe" onChange={handleChange}/>
         <Field value={newPasswordConfirm} type="password" name="passwordConfirm" placeholder="Confirmation du mot de passe" onChange={handleChange}/>

         <button type="submit" onClick={handleSubmit}>Confirmer</button> */}

        <span className="bg-#ff253a flex content-center align-items: stretch justify-center">

        <div className="h- grid grid-cols-3 gap-1 flex content-center justify-center h-full items-center justify-content: space-evenly flex-grow: 12;">
            <button value="BD/Comics & Manga" className="profileLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] hover:bg-sky-700 rounded-xl shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>BD/Comics & Manga</button>
            <button value="Science-Fiction & Fantasy" className="profileLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] hover:bg-sky-700 rounded-xl shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>Science-Fiction & Fantasy</button>
            <button value="Polar & Thriller" className="profileLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] hover:bg-sky-700 rounded-xl shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>Polar & Thriller</button>
            <button value="Romans" className="profileLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] rounded-xl hover:bg-sky-700 shadow-lg flex text-align: center; space-x-1" onClick={handleClick}>Romans</button>
            <button value="Littérature classique" className="profileLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] rounded-xl hover:bg-sky-700 shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>Littérature classique</button>
            <button value="Enfants & Jeunesse" className="profileLabelButton p-3 max-w-sm mx-auto bg-[#292F44] text-white hover:bg-sky-700 rounded-xl shadow-lg flex text-align: center; space-x-1" onClick={handleClick}>Enfants & Jeunesse</button>
            <button value="Savoir" className="profileLabelButton p-3 max-w-sm mx-auto bg-[#292F44] text-white hover:bg-sky-700 rounded-xl shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>Savoir</button>
            <button value="Loisirs" className="profilepLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] hover:bg-sky-700 rounded-xl shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>Loisirs</button>
            <button value="Autres" className="profileLabelButton p-3 max-w-sm mx-auto text-white bg-[#292F44] hover:bg-sky-700 rounded-xl shadow-lg flex items-inline-block space-x-1" onClick={handleClick}>Autres</button>

        </div>

        </span>


        {/* Infos "secondaires" */}
        <Field value={newBiography} classInformation="biography" type="text" name="biography" placeholder="Bio" onChange={handleChange} />
        <Field value={newLocalisation} classLocalisation="Localisation" type="text" name="localisation" placeholder="Région" onChange={handleChange} />
        <Field value={newZipcode} classLocalisation="Zipcode" type="text" name="zipcode" placeholder="Code postal" onChange={handleChange} />

        {/* informations dures */}
        <Field value={newLastName} type="text" name="lastname" placeholder="Nom" onChange={handleChange} />
        <Field value={newFirstName} type="text" name="firstname" placeholder="Prénom" onChange={handleChange} />
        <Field value={newUsername} type="text" name="username" placeholder="Pseudonyme" onChange={handleChange} />
        <Field value={oldPassword} type="password" name="oldPassword" placeholder="ancien Mot de passe" onChange={handleChange} />
        <Field value={newPassword} type="password" name="password" placeholder="Nouveau mot de passe" onChange={handleChange} />
        <Field value={newPasswordConfirm} type="password" name="passwordConfirm" placeholder="Confirmation du mot de passe" onChange={handleChange} />

        <button className='bg-blue-700 hover:bg-800 text-white font-bold py-2 px-2rounded' type="submit" onClick={handleSubmit}>Confirmer</button>
    </form>
    )
};


export default Account;