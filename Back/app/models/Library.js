// Import du CoreDatamapper, class parente des Models
const CoreDatamapper = require('./coreDatamapper');
// Import du client
const client = require('../config/db');

/**
 * "Library" Model Object
 * @typedef {object} LibraryModel
 * @property {number} user_id - User id
 * @property {number} book_id - Book id
 * @property {boolean} is_available - Availability of the book
 */

module.exports = class Library extends CoreDatamapper {
    static tableName = 'library';

    constructor(library) {
        super();
        this.user_id = library.user_id;
        this.book_id = library.book_id;
        this.is_available = library.is_available;
    }

    async create() {

    }
};
