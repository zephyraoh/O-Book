import { useDispatch } from "react-redux";
import { SetUserLabel } from "../../actions/user";

const Account = () =>{
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
    console.log(`button ${e.target.value} clicked`);
    dispatch(SetUserLabel(e.target.value))
}

    return (
    <>
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