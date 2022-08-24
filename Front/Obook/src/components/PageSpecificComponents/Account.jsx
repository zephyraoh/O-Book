import { useDispatch, useSelector } from "react-redux";
import { setUserData, SetUserLabel } from "../../actions/user";
import Axios from "axios";
import { useState } from "react";

const Account = () =>{
    const dispatch = useDispatch();

    const userImg = useSelector(state=>state.user.profilePicture);
    console.log(userImg);
    


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
 
    const handleClick = (e) => {
        console.log(`button ${e.target.value} clicked`);
        dispatch(SetUserLabel(e.target.value))

}
    return (
    <>

    <img src={userImg}></img>
    <input type="file" onChange={event=>setImageSelected(event.target.files[0])}/>
    <button name="upload Image" onClick={uploadImage}>Upload Image</button>
        <button value ="Romans" name="profileLabelButton" onClick={handleClick}>Romans</button>
        <button value = 'Science-Fiction & Fantasy' name="profileLabelButton" onClick={handleClick}>Science-Fiction & Fantasy</button>
        <button value ="Polar & Thriller" name="profileLabelButton" onClick={handleClick}>Polar & Thriller</button>
        <button value ="BD/Comics & Manga" name="profileLabelButton" onClick={handleClick}>BD/Comics & Manga</button>
        <button value ="Littérature classique" name="profileLabelButton" onClick={handleClick}>Littérature classique</button>
        <button value ="Enfants & Jeunesse" name="profileLabelButton" onClick={handleClick}>Enfants & Jeunesse</button>
        <button value ="Savoir" name="profileLabelButton" onClick={handleClick}>Savoir</button>
        <button value ="Loisirs" name="profileLabelButton" onClick={handleClick}>Loisirs</button>
        <button value ="Autres" name="profileLabelButton" onClick={handleClick}>Autres</button>


    </>
    )
};



export default Account;