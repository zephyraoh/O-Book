import axs from 'axios';

const apiKey = import.meta.env.VITE_ISBN_API_KEY;

export const ISBNApiSearchBar = axs.create({
	baseURL: 'https://api2.isbndb.com',
	headers: {'Authorization': apiKey},
	
});

export const axiosServerDB = axs.create({
	// ---------------- version HEROKU ----------------
	// baseURL: 'https://obook-api.herokuapp.com/api',
	// withCredentials: true,
	// ---------------- version BACK LOCALHOST ----------------
	baseURL: 'http://localhost:5999/api',
});