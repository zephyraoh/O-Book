import Field from "./Field";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { setUserField, signIn } from "../../actions/user"




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
    
    const onChange = (value, name) => {
		dispatch(setUserField(value, name));
	};

  const handleSubmit = (e) => {
    e.preventDefault();
		dispatch(signIn());
    
	};

    return (
    <form onSubmit={handleSubmit}>
    <h2>Connexion ou Inscription</h2>
    {/* //form de login */}
    <Field value = {email}  name = "email" placeholder="email" onChange={onChange} />
    <Field value = {password} name = "password" placeholder="Mot de Passe" onChange={onChange} />
    <Button name="Se connecter" value="loginButton" className="login-button" />
  </form>
  )
};
