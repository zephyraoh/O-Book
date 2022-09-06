import { useDispatch, useSelector } from "react-redux";
import { clearPasswords, setUserField, signIn } from "../../../../../actions/user";
import Field from "../Field";
import Button from "../../../Button";
import { useState } from "react";

const SignInPartModal = ()=>{
    // const used
    const newUserName = useSelector(state => state.user.newUserName); 
    const newEmail = useSelector(state => state.user.newEmail);
    const newPassword = useSelector(state => state.user.newPassword);
    const newPasswordConfirm = useSelector(state => state.user.newPasswordConfirm);
    
    // hooks used
    const dispatch = useDispatch();
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("error");

    const onChange = (value, name) => {
		dispatch(setUserField(value, name));
    }

    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        // vérification des mdp égaux et existants : refactorisable
        if(newPassword && newPasswordConfirm){
            if(newPasswordConfirm === newPassword){
              dispatch(signUp());
              setIsPasswordValid(true);
            }else{
              setErrorMessage("Erreur : les mots de passe sont différents");
              setIsPasswordValid(false);
            }
            }else{
          setErrorMessage("Erreur : merci de renseigner les deux champs de mot de passe"),
          setIsPasswordValid(false)
            }
        dispatch(clearPasswords());
        };
        
    return (
        <form className="login-form" onSubmit={handleSubmitSignUp}>
        <h2>Inscription</h2>
        {/* //form de sign up */}
        <Field value= {newUserName} type= "text" name= "newUserName" placeholder = "Nom d'utilisateur" onChange={onChange} />
        <Field value= {newEmail} type= "email" name= "newEmail" placeholder = "Email" onChange={onChange} />
        <Field value= {newPassword} type= "password" name= "newPassword" placeholder = "Mot de Passe" onChange={onChange} />
        <Field value= {newPasswordConfirm} type= "password" name= "newPasswordConfirm" placeholder = "Confirmez le Mot de Passe" onChange={onChange} />
        <Button name="S'inscrire" value="signupButton" className="signup-button"/>
        <a onClick={handleClick}>Déjà inscrit ?</a>
        {!isPasswordValid && <p>{errorMessage}</p>}
      </form>
    )
};



export default SignInPartModal;