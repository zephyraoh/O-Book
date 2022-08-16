// Import du client
const client = require('../config/db');

module.exports = class CoreDataMapper {
    static async findAll() {
        const results = await client.query(`
            SELECT * FROM "${this.tableName}"
        `);
        return results.rows;
    }

    static async findByPk(id) {
        const sql = {
            text: `SELECT * FROM ${this.tableName}
                WHERE id=$1`,
            values: [id],
        };
        const results = await client.query(sql);
        return results.rows[0];
    }
};
