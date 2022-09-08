import { axiosServerDB } from '../utils/axios';
import { DELETE_BOOK, FETCH_ADD_NEW_BOOK_TO_MY_LIBRARY, SEND_MY_BOOKS_AVAILABILITY, setMyBooksAvailability, setLoading, fetchBooks, REQUEST_LOAN, GET_BOOK_OWNERS, setBookOwners, ACCEPT_LOAN, END_LOAN, FETCH_LENDER_INFOS, setLenderInfos } from '../actions/books';
import { setUserData, SIGN_IN, SIGN_UP, GET_MY_LIBRARY, GET_MEMBER_PROFILE, SEND_MODIFIED_INFOS, ADD_TAG_USER, REMOVE_TAG_USER, GET_ALL_TAGS, setAllTags, setMyTags, dispatchError } from '../actions/user';
import axios from 'axios';


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
			try {
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
			} catch(e){
				console.log(e);
				store.dispatch(dispatchError());
			}
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

		case GET_MY_LIBRARY: {
			try{
				const { data } = await axiosServerDB.get('/mylibrary')
				console.log("receiving profile data !!!>>>", data);
				const correctedData ={
					library:{
						books: data.books,
						borrow: data.borrow,
						lends: data.lends,
					},
				}
				store.dispatch(setUserData(correctedData));
				store.dispatch(fetchBooks());
			
		}catch(error){
			console.log('error getting profile >>>', error);
		}
		break;
		}
		case GET_MEMBER_PROFILE: {
			try{
				const { data } = await axiosServerDB.get(`/library/${action.payload}`)
				console.log(`receiving profile data of member ${action.payload} !!!>>>`, data);
				store.dispatch(setVisitedProfileData)

		}catch(error){
			// console.log('error getting profile >>>', error);
		}
		break;
		}
		// case SET_USER_LABEL:{
		// 	try{
		// 		const tagId = action.payload
		// 		const { data } = await axiosServerDB.post('/addtag', {tagId: tagId})
		// 		console.log("received data on user label change >>>>", data)

		// 	}catch(error){
		// 		console.log("error setting label", error);
		// 	}
		// 	break;
		// }
		case SEND_MODIFIED_INFOS:{
			try{
				console.log(action.data)
				const { data } = await axiosServerDB.patch('/profile', action.data)
				Object.keys(data).forEach(key => {
					data[key] = data[key] || '';
				}
				);

				console.log("data currated reçues au ptch profile avec SEND_MODIFIED_INFOS", data)
				store.dispatch(setUserData(data));
			}catch(err){
				console.error("err", err);
			}
			break;
		};
		case SEND_MY_BOOKS_AVAILABILITY :{
			try{
				console.log("on entre dans l'action SEND MY BOOKS", action.libraryId, !action.is_available);
				const {data} = await axiosServerDB.patch(`/mylibrary/book/${action.libraryId}`, {"isAvailable": !action.is_available})
				console.log("réponse serveur", data)
				console.log("Telling server the book with library id ", action.libraryId,"is", !action.is_available)
				store.dispatch(setMyBooksAvailability(data));

			}catch(err){
				console.log("Telling server the book with library id ", action.libraryId,"is", !action.is_available,"err", err);
			}
			break;
		}
		case DELETE_BOOK:{
			try{
				const id = action.payload;
				console.log('On supprime un livre');
				const {data} = await axiosServerDB.delete(`/mylibrary/book/${id}`);
				console.log(data);

			}catch(err){
				console.log(err);
			}
			break;
		}
		case FETCH_ADD_NEW_BOOK_TO_MY_LIBRARY:{
			try{
				const {data} = await axiosServerDB.post(`/mylibrary/addBook/`, {
				isbn: `${action.payload}`});
				console.log("book successfully added, server response: =>", data);
					
			}catch(err){
				console.log("ERROR ADDING BOOK TO MY LIBRARY",err);
			}
			break;
		}
		case ADD_TAG_USER:{
			try{
				const tagId = action.payload;
				const {data} = await axiosServerDB.post('/addtag', {
				tagId: tagId });
				console.log("tag added DATAAAA==>", data);
				store.dispatch(setMyTags(data));
			}catch(err){
				console.log(err);
			}
			break;
		}
		case REMOVE_TAG_USER:{
			try{
				const tagId = action.payload;
				const {data} = await axiosServerDB.delete(`/removetag/${tagId}`);
				store.dispatch(setMyTags(data));
					
			}catch(err){
				console.log(err);
			}
			break;
		}
		case GET_ALL_TAGS:{
			try{
				const {data} = await axiosServerDB.get('/tags');
				console.log("tags received ==>", data);
				store.dispatch(setAllTags(data));
				store.dispatch(setLoading(false));
					
			}catch(err){
				console.log(err);
			}
			break;
		}
		case REQUEST_LOAN:{
			try{
				const libraryId = action.payload;
				const {data} = await axiosServerDB.post('/loan', {libraryId: libraryId});
				console.log("loan generated ==>", data);

					
			}catch(err){
				console.log(err);
			}
			break;
		}
		case END_LOAN:{
			try{
				const loanId = action.payload;
				console.log(loanId);
				const {data} = await axiosServerDB.patch(`/loan/${loanId}`, {status: "Terminé"});
				console.log("loan ended ==>", data);
					
			}catch(err){
				console.log(err);
			}
			break;
		}
		case ACCEPT_LOAN:{
			try{
				const loanId = action.payload;
				const {data} = await axiosServerDB.patch(`/loan/${loanId}`, {status: "En cours"});
				console.log("loan status changed ===>", data);		
			}catch(err){
				console.log(err);
			}
			break;
		}
		case GET_BOOK_OWNERS:{
			try{
				const isbn = action.payload;
				const {data} = await axiosServerDB.get(`/book/${isbn}`);
				console.log("book owners list fetched ===>", data);
				store.dispatch(setBookOwners(data));
					
			}catch(err){
				console.log(err);
			}
			break;
		}
		case FETCH_LENDER_INFOS:{
			try{
				const {data} = await axiosServerDB.get(`/userinfos/${action.payload}`)
				console.log("received LENDER INFOS from Serv ==>", data)
				store.dispatch(setLenderInfos(data));
			}catch(err){
				console.log(err);
			}
		}
		default: 
			next(action); 
	} 
}; 

export default authMiddleware;
