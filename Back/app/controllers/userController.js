const { hashSync, compareSync } = require('bcrypt');
const AuthError = require('../errors/authError');
const jwt = require('../helpers/jwt');
const User = require('../models/User');

const userController = {
    // Fonction pour créer un nouvel utilisateur
    async createUser(req, res) {
        // Récupération des données utilisateur
        const {
            firstname,
            lastname,
            username,
            password,
            passwordConfirm,
            email,
            zipcode,
            localisation,
            biographie,
            profilePicture,
        } = req.body;

        // Vérifier que les champs obligatoires ont été renseignés
        if (
            !firstname
            || !lastname
            || !username
            || !password
            || !email
            || !zipcode
            || !localisation
            || !biographie) {
            throw new Error('Missing informations');
        }

        // Vérifier que le user n'existe pas déjà en BDD avec son email
        const userByEmail = User.findSome('email', email);
        if (userByEmail) {
            throw new Error('Email already used');
        }

        // Vérifier que le user n'existe pas déjà avec son username
        const userByUsername = User.findSome('username', username);
        if (userByUsername) {
            throw new Error('Username already used');
        }

        // Comparer les MDP
        if (password !== passwordConfirm) {
            throw new Error('Password and Password confirmation must match');
        }

        // Hashage du MDP
        const hashedPassword = hashSync(password, 10);

        // Création d'un nouvel utilisateur
        const newUser = new User({
            firstname,
            lastname,
            username,
            password: hashedPassword,
            email,
            zipcode,
            localisation,
            biographie,
            profile_picture: profilePicture,
        });

        // Insertion du nouvel utilisateur en BDD
        const results = await newUser.create();
        res.json(results.rows[0]);
    },

    async signin(req, res) {
        // Récupération des données utilisateur
        const { email, password } = req.body;

        // On vérifie que l'utilisateur a saisi toutes les infos
        if (!email || !password) {
            throw new AuthError('Invalid input');
        }

        // On vérifie que l'utilisateur existe bien en BDD
        const user = User.findSome('email', email);
        if (!user) {
            throw new AuthError('This email does not exist');
        }

        // Comparaison du MDP saisi avec le hash
        const isPasswordCorrect = compareSync(password, user.password);
        if (!isPasswordCorrect) {
            throw new AuthError('Wrong password');
        }

        const token = jwt.create(user);
        // On renvoi le token
        res.json(token);
    },
};

module.exports = userController;
