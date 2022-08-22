import axs from 'axios';

export const axiosBooksApi = axs.create({
	baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});


export const axiosServerDB = axs.create({
	baseURL: 'http://localhost:5999',//URL DU FUTUR SERVEUR BACK O'BOOK
});


// Lien de la doc : https://developers.google.com/books/docs/v1/using

// recherche globale = 'https://www.googleapis.com/books/v1/volumes?q={recherche}'
// recherche par titre = 'https://www.googleapis.com/books/v1/volumes?q=intitle:{recherche}'
// recherche par auteur = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:{recherche}'
// recherche par genre = 'https://www.googleapis.com/books/v1/volumes?q=subject:{recherche}'

