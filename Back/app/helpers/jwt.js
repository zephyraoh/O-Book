const jwt = require('jsonwebtoken');
const debug = require('debug')('jwt:data');

const AuthError = require('../errors/authError');

const secret = process.env.JWT_SECRET || 'secretphrase';

module.exports = {
    create(userData) {
        const options = {};
        options.expiresIn = process.env.JWT_EXPIRES;

        const user = {
            id: userData.id,
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
        };

        return {
            token: jwt.sign(user, secret, options),
            expiresIn: options.expiresIn,
        };
    },
    get(req) {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];

            try {
                const user = jwt.verify(token, secret);

                if (!user.ip || user.ip !== req.ip) {
                    throw new AuthError(
                        "You can't access to this service, please renew your token /signin",
                    );
                }
                debug(user);

                return user;
            } catch (error) {
                throw new AuthError(error.message);
            }
        } else if (typeof req.headers.authorization !== 'undefined') {
            throw new Error('Missing token');
        }
        return null;
    },
};
