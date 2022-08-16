const CoreDatamapper = require('./coreDatamapper');

/**
 * "Library" Model Object
 * @typedef {object} LibraryModel
 * @property {string} user_id - id of the user who owns this library
 */

module.exports = class Library extends CoreDatamapper {
    static tableName = 'library';

    constructor(library) {
        super();
        this.user_id = library.user_id;
    }
};
