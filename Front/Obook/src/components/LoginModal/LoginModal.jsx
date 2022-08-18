import Field from "./Field";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setUserField, signIn, signUp } from "../../actions/user"

import './styles.scss';
import { NavLink } from "react-router-dom";



/**
 * LoginModal(handleLoginSignInClick)
 */
// const handleChange(evt) => {
//     dispatch(setUserField(evt.target.value, name))
// }



export const LoginModal=()=>{
    
    const dispatch = useDispatch();
    const email = useSelector(state => state.user.email);
    const password = useSelector(state => state.user.password);
    const newEmail = useSelector(state => state.user.newEmail);
    const newPassword = useSelector(state => state.user.newPassword);
    
    

    const onChange = (value, name) => {
		dispatch(setUserField(value, name));
	};

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
		dispatch(signIn());

	};

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
		dispatch(signUp());

	};

  const [loginForm, setLoginForm] = useState(true);
    return (

    <div className="login-modal">
      { loginForm && (
        <form className="login-form" onSubmit={handleSubmitSignIn}>
        <h2>Connexion</h2>
        {/* //form de login */}
        <Field value= {email} type= "email" name= "email" placeholder="email" onChange={onChange} />
        <Field value= {password} type= "password" name= "password" placeholder="Mot de Passe" onChange={onChange} />
        <Button name="Se connecter" value="loginButton" className="login-button" />
        <a>Pas encore inscrit ?</a>
      </form>
      )}
      
      { !loginForm && (
      <form className="login-form" onSubmit={handleSubmitSignUp}>
        <h2>Inscription</h2>
        {/* //form de login */}
        <Field value= {newUserName} type= "text" name= "newUserName" placeholder = "Nom d'utilisateur" onChange={onChange} />
        <Field value= {newEmail} type= "email" name= "newEmail" placeholder = "Email" onChange={onChange} />
        <Field value= {newPassword} type= "password" name= "newPassword" placeholder = "Mot de Passe" onChange={onChange} />
        <Field value= {newPasswordConfirm} type= "password" name= "newPasswordConfirm" placeholder = "Confirmez le Mot de Passe" onChange={onChange} />
        <Button name="S'inscrire" value="signupButton" className="signup-button" />
      </form>
      )}
      </div>

  )
};
