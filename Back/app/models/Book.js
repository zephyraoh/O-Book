const CoreDatamapper = require('./coreDatamapper');

/**
 * "Book" Model Object
 * @typedef {object} BookModel
 * @property {string} google_api_id - Google API id of the book
 */

module.exports = class Book extends CoreDatamapper {
    static tableName = 'book';

    constructor(book) {
        super();
        this.google_api_id = book.google_api_id;
    }

    /**
     * Get all books by libraryId
     * @param {number} libraryId - Library Id
     * @returns Books or undefined if there's no library Id match
     */
    async findByLibrary(libraryId) {
        const sql = {
            text: 'SELECT * FROM books_by_library WHERE library_id = $1',
            values: [libraryId],
        };
        const results = await client.query(sql):
        if (results.rowCount === 0) {
            return undefined;
        }
        return results.rows;
    }
};
