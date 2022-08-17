import PropTypes from "prop-types";
import Field from "./Field";

import { setUserField } from "../../actions/user"

const email = useSelector(state => state.user.email);
const password = useSelector(state => state.user.password);


/**
 * LoginModal(handleLoginSignInClick)
 */
// const handleChange(evt) => {
//     dispatch(setUserField(evt.target.value, name))
// }




export const LoginModal=()=>{

   
    
    const handleChange = (value, name) => {
		dispatch(setUserField(value, name));
	};

    return (
    <>
    <h2>Connexion ou Inscription</h2>
    {/* //form de login */}
    <Field value = {email}  name = "email" placeholder="email" onChange={handleChange} />
    <Field value = {password} name = "password" placeholder="Mot de Passe" onChange={handleChange} /> 

  </>
  )
}

changeField, 
//= const handleChangeField = (value, name) => {
    // dispatch(changeUserField(value, name));
// };



