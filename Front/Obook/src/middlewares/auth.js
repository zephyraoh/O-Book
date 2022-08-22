import { setUserData, SIGN_IN, SIGN_UP, LOGOUT, DEL_ACCOUNT, CHANGE_USER_INFO, CHANGE_USER_INFO_MISC } from '../actions/user';
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

			// Je stock les informations reçu au login dans mon store
			store.dispatch(setUserData(data));
			// Je déclenche l'action qui va aller récupérer mes recettes favorites
			// store.dispatch(fetchFavorites());
			console.log('It worked !!! >>>>>', data )
			break;
		}
		case SIGN_UP:{

			const {user:{newEmail, newPassword}} = store.getState();

			const response = await axiosServerDB.post('/createuser', {
				newEmail,
				newPassword,
			})
			console.log(response);
			// Vérification de la création d'un user ou s'il est déjà présent en BDD en fonction du status réponse serveur TODO :
			// response.ok ? store.dispatch(setCreationConfirmation(true)) : store.dispatch(setCreationConfirmation(false))
			
			console.log('User created !!!')
		}
		default: 
			next(action); 
	} 
}; 

export default authMiddleware;
