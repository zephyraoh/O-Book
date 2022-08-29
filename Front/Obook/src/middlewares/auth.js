import { axiosServerDB } from '../utils/axios';
import { SEND_MY_BOOKS_AVAILABILITY, setMyBooksAvailability } from '../actions/books';
import { setUserData, SIGN_IN, SIGN_UP, GET_MY_PROFILE, GET_MEMBER_PROFILE, SET_USER_LABEL } from '../actions/user';


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
			console.log("réponse serveur",data);
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
			console.log("infos serveur reçues à la connexion", correctedData);
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
// 		case CHANGE_USER_INFO:{
// 			const {user:{lastName, firstName, userName, password, newPassword, newPasswordConfirm}} = store.getState();
// 			try {
// 				const response = await axiosServerDB.post('/createuser', {
// 					lastname: lastName,
// 					firstname: firstName,
// 					username: userName,
// 					email: newEmail,
// 					oldPassword: password,
// 					password: newPassword,
// 					passwordConfirm: newPasswordConfirm,
// 					zipcode: 

// 				})
// // 				firstname
// // lastname
// // username
// // password
// // email
// // zipcode
// // localisation
// // tel
// // biography
// // profile_picture
// 				console.log(response);
// 				console.log('User created !!!')
// 			}catch(error){
// 				console.log("ERROR >>>>", error.response.data);
// 			}
// 		}

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
				store.dispatch(setVisitedProfileData)

		}catch(error){
			// console.log('error getting profile >>>', error);
		}
		}
		case SET_USER_LABEL:{
			try{
				const { data } = await axiosServerDB.post('/addtag')
				console.log("received data on user label change >>>>", data)
			}catch(error){
				console.log("error setting label", error);
			}
		}set
		case SEND_MY_BOOKS_AVAILABILITY :{
			try{
				console.log("on entre dans l'action SEND MY BOOKS", action.libraryId, !action.is_available);
				const {data} = await axiosServerDB.patch(`/mylibrary/book/${action.libraryId}`, {"isAvailable": !action.is_available})
				console.log("réponse serveur", data)
				console.log("Telling server the book with library id ", action.libraryId,"is", !action.is_available)
				store.dispatch(setMyBooksAvailability(data));

			}catch(err){
				console.log("Telling server the book with library id ", action.libraryId,"is", !action.is_available,"error", err);
			}
		}
		
		default: 
			next(action); 
	} 
}; 

export default authMiddleware;
