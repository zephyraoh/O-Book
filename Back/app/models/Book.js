const CoreDatamapper = require('./coreDatamapper');
const client = require('../config/db');

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

    static async getLastBooks() {
        const sql = `SELECT * FROM ${this.tableName} ORDER BY "created_at" LIMIT 50`;
        const results = await client.query(sql);
        return results.rows;
    }

    // eslint-disable-next-line class-methods-use-this
    async insert() {
        const sql = {
            text: 'SELECT * FROM insert_book($1)',
            values: [this.google_api_id],
        };
        const result = await client.query(sql);
        return result.rows[0];
    }
};
