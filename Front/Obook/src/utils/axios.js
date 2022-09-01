import axs from 'axios';

const apiKey = import.meta.env.VITE_ISBN_API_KEY;

export const ISBNApiSearchBar = axs.create({
	baseURL: 'https://api2.isbndb.com',
	headers: {'Authorization': apiKey},
	
});

export const axiosServerDB = axs.create({
	baseURL: 'https://obook-api.herokuapp.com/api',
	// POUR LA PARTIE CORS, AJOUTER :
	withCredentials: true,
});


