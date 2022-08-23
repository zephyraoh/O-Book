import { compose } from 'redux';
import { setUserData, SIGN_IN, SIGN_UP, LOGOUT, DEL_ACCOUNT, CHANGE_USER_INFO, CHANGE_USER_INFO_MISC, CLEAR_PASSWORDS, GET_MY_PROFILE, GET_MEMBER_PROFILE } from '../actions/user';
import { axiosServerDB } from '../utils/axios';



const authMiddleware = (store) => (next) => async (action) => { 
	switch (action.type) { 
		case SIGN_IN: {
			// Équivalent
			// const { user } = store.getState();
			// const { email, password } = user;
			const { user: { email, password } } = store.getState();
			// On utilise une instance d'axios qui est configurée avec un baseUrl me permettant de ne plus spéficier à chaque fois http://localhost:3001
            //BASE URL SERVEUR à remplir ici
            // const BASE_URL_OBOOK_SERV = 

			const { data } = await axiosServerDB.post('/login', {
				email,
				password,
			});

			// Une fois connecté, je modifie les headers de base de mon instance axios
			// Cela me permet de ne plus avoir à spéficier dans chaque requête ses headers
			axiosServerDB.defaults.headers.common.Authorization = `Bearer ${ data.token }`;
			console.log(data);
			// Objet transitoire pour add les data au state.user via le dispatch(setUserData)
			const correctedData ={
				library:{
					books: data.library.books,
					borrow: data.library.borrow,
					lends: data.library.lends
				},
				token: data.token,
				isLogged: data.isLogged,
				...data.library.userInfos,
				tags: data.library.tags,
			}
			store.dispatch(setUserData(correctedData));
			console.log(correctedData);
			break;
		}
		case SIGN_UP: {

			const {user:{newUserName, newPasswordConfirm, newEmail, newPassword}} = store.getState();
			try {
				const response = await axiosServerDB.post('/createuser', {
					username: newUserName,
					email: newEmail,
					password: newPassword,
					passwordConfirm: newPasswordConfirm,
				})
				console.log(response);
				console.log('User created !!!')
			}catch(error){
				console.log("ERROR >>>>", error.response.data);
			}
			// Vérification de la création d'un user ou s'il est déjà présent en BDD en fonction du status réponse serveur TODO :
			// response.ok ? store.dispatch(setCreationConfirmation(true)) : store.dispatch(setCreationConfirmation(false))
			
		}
		case GET_MY_PROFILE: {
			try{
				const { data } = await axiosServerDB.get('/mylibrary')
			console.log("receiving profile data !!!>>>", data);
		}catch(error){
			console.log('error getting profile >>>', error);
		}
		}
		case GET_MEMBER_PROFILE: {
			try{
				const { data } = await axiosServerDB.get(`/library/${action.payload}`)
				console.log(`receiving profile data of member ${action.payload} !!!>>>`, data);
		}catch(error){
			// console.log('error getting profile >>>', error);
		}
		}
		default: 
			next(action); 
	} 
}; 

export default authMiddleware;
