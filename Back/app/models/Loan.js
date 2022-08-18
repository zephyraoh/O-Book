// Import du CoreDatamapper, class parente des Models
const CoreDatamapper = require('./coreDatamapper');
// Import du client
const client = require('../config/db');

/**
 * "Library" Model Object
 * @typedef {object} LoanModel
 * @property {string} status - Loan status
 * @property {date} loanDate - Loan date
 * @property {number} libraryId - Library id who lends the book
 * @property {number} userId - User id who borrows the book
 */

module.exports = class Loan extends CoreDatamapper {
    static tableName = 'library';

    constructor(loan) {
        super();
        this.status = loan.status;
        this.loan_date = loan.loanDate;
        this.user_id = loan.userId;
        this.library_id = loan.libraryId;
    }
};
