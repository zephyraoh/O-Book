import axs from 'axios';

const apiKey = import.meta.env.VITE_ISBN_API_KEY;

export const axiosBooksApi = axs.create({
	baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
	
});

// Recherche fonctionnelle : pour une recherche classique, ajouter la search value à l'URL + un point d'interrogation.
// Pour ajouter un filtre par titre ou par auteur, ajouter &column=title ou &column=author à la fin de l'url
export const ISBNApiSearchBar = axs.create({
	baseURL: 'https://api2.isbndb.com',
	headers: {'Authorization': apiKey},
	
});

export const axiosServerDB = axs.create({
	baseURL: 'http://localhost:5999',//URL DU FUTUR SERVEUR BACK O'BOOK
});


