import { useDispatch } from "react-redux";
import { SetUserLabel } from "../../actions/user";
import Axios from "axios";
import { useState } from "react";


const Account = () =>{
    const dispatch = useDispatch();
    const [imageSelected, setImageSelected] = useState("")
    const uploadImage = (e)=>{

        //A dispatch dans une action middleware (auth?)
        const selectedFiles = e.target.files;
        console.log("last selected file ==>", selectedFiles[0]);
        const formData = newFormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "visitor of Obook website")
        console.log("our final formData ==>", formData)
        
        Axios.post("https://api.cloudinary.com/v1_1/obook/upload",formData)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleClick = (e) => {
        console.log(`button ${e.target.value} clicked`);
        dispatch(SetUserLabel(e.target.value))

}
    return (
    <>
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