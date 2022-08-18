import axs from 'axios';

export const axiosBooksApi = axs.create({
	baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});


export const axiosServerDB = axs.create({
	baseURL: 'http://localhost:5999',//URL DU FUTUR SERVEUR BACK O'BOOK
});


// Clé de Duke : AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fg /* à mettre dans le .env de React un jour

// modèle : https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fg

// Lien de la doc : https://developers.google.com/books/docs/v1/using

// recherche globale = 'https://www.googleapis.com/books/v1/volumes?q={recherche}'
// recherche par titre = 'https://www.googleapis.com/books/v1/volumes?q=intitle:{recherche}'
// recherche par auteur = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:{recherche}'
// recherche par genre = 'https://www.googleapis.com/books/v1/volumes?q=subject:{recherche}'

