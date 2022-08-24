import { useDispatch, useSelector } from "react-redux";
import { clearPasswords, setUserField, signIn } from "../../../../../actions/user";
import Field from "../Field";
import Button from "../../../Button";


const LoginPartModal = ()=>{
    const dispatch = useDispatch;

    const email = useSelector(state => state.user.email);
    const password = useSelector(state => state.user.password);
    
    const onChange = (value, name) => {
		dispatch(setUserField(value, name));
    }

    const handleClick = (e)=>{
        setLoginForm(!loginForm)
      }

    const handleSubmitSignIn = (e) => {
        e.preventDefault();
            dispatch(signIn());
        dispatch(clearPasswords());
    };

  return( 

    <form className="login-form" onSubmit={handleSubmitSignIn}>
    <h2>Connexion</h2>
    {/* //form de login */}
    <Field value= {email} type= "email" name= "email" placeholder="email" onChange={onChange} />
    <Field value= {password} type= "password" name= "password" placeholder="Mot de Passe" onChange={onChange} />
    <Button name="Se connecter" type="submit" value="loginButton" className="login-button" />
    <a onClick={handleClick}>Pas encore inscrit ?</a>
    </form>
);

    
};

export default LoginPartModal;