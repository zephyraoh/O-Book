const Library = require('../models/Tag');
const Book = require('../models/Book');
const ClientError = require('../errors/clientError');

const libraryController = {
    async getMyLibrary(req, res) {
        // Récupérer toutes les infos personnelles de librairie d'un utilisateur
        const id = Number(req.user.id);
        const library = await Library.getPersonnalLibraryDetails(id);
        res.json(library);
    },

    async addBookInLibrary(req, res) {
        // Ajouter un livre à la librairie d'un utilisateur
        // Récupération du googleApiId
        const googleApiId = Number(req.body.googleApiId);

        // Récupération du userId
        const userId = Number(req.user.id);

        // Vérifier si le livre existe déjà en BDD
        const book = await Book.findOne('google_api_id', googleApiId);
        let bookId;
        if (!book) {
            const newBook = new Book(googleApiId);
            const insertedBook = await newBook.insert();
            bookId = insertedBook.id;
        } else {
            bookId = book.id;
        }

        // Création d'une nouvelle entrée en librairie
        const newLibrary = new Library({
            user_id: userId,
            book_id: bookId,
        });
        await newLibrary.insert();
        newLibrary.reload();

        res.json(newLibrary);
    },

    async updateBookInLibrary(req, res) {
        // Modifier le status d'un livre dans la librairie de l'utilisateur
        // Récupération de l'id de l'entrée en librairie
        const libraryId = Number(req.params.id);
        // Récupération de l'information isAvailable
        const { isAvailable } = req.body;

        // Vérifier si l'entrée en librairie existe bien
        const library = await Library.findByPk(libraryId);
        if (!library) {
            throw new ClientError('This library does not exist');
        }

        // Modification de la librairie
        const updatedLibrary = Library.update(isAvailable, libraryId);

        res.json(updatedLibrary);
    },

    async deleteBookFromLibrary(req, res) {
        // Supprimer livre de la librairie de l'utilisateur
        // Récupération de l'id de l'entrée en librairie
        const libraryId = Number(req.params.id);
        // Vérifier que l'entrée existe bien
        const library = await Library.findByPk(libraryId);
        if (!library) {
            throw new ClientError('This library does not exist');
        }
        await Library.delete(libraryId);
        res.status(200).json('Library deleted');
    },

    async getLibrary(req, res) {
        // Récupérer les infos de librairie d'un autre utiliateur
        const { username } = req.params;
        const library = await Library.getUserLibraryDetails(username);
        res.json(library);
    },
};

module.exports = libraryController;
