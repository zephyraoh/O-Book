const CoreDatamapper = require('./coreDatamapper');
// Import du client
const client = require('../config/db');

// representation d'une table
/**
 * "Tag" Model Object
 * @typedef {object} TagModel
 * @property {string} label - Label
 *
*/

module.exports = class Tag extends CoreDatamapper {
    static tableName = 'tag';

    // création d'un nouveau Tag
    constructor(tag) {
        super();
        this.label = tag.label;
    }
};
