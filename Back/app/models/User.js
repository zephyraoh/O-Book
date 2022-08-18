// Import du CoreDatamapper, class parente des Models
const CoreDatamapper = require('./coreDatamapper');
const client = require('../config/db');

/**
 * "User" Model Object
 * @typedef {object} UserModel
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} username - User username
 * @property {string} password - User password
 * @property {string} email - User email
 * @property {number} zipcode - User postal code
 * @property {string} localisation - User localisation
 * @property {string} biography - User biographie
 * @property {string} profilePicture - User profile picture url
 */

module.exports = class User extends CoreDatamapper {
    static tableName = 'user';

    constructor(user) {
        super();
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.zipcode = user.zipcode;
        this.localisation = user.localisation;
        this.biography = user.biography;
        this.profile_picture = user.profile_picture;
    }

    async create() {
        const sql = {
            text: 'SELECT * FROM insert_user($1)',
            values: [this],
        };
        const results = await client.query(sql);
        return results.rows[0];
    }
};
