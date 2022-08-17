import Field from "./Field";
import { useSelector, useDispatch } from "react-redux";
import { setUserField } from "../../actions/user"




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

    return (
    <>
    <h2>Connexion ou Inscription</h2>
    {/* //form de login */}
    <Field value = {email}  name = "email" placeholder="email" onChange={onChange} />
    <Field value = {password} name = "password" placeholder="Mot de Passe" onChange={onChange} /> 
  </>
  )
}

// changeField, 
//= const handleChangeField = (value, name) => {
    // dispatch(changeUserField(value, name));
// };



