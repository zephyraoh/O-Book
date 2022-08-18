const { hashSync, compareSync } = require('bcrypt');
const AuthError = require('../errors/authError');
const jwt = require('../helpers/jwt');
const User = require('../models/User');

const userController = {
    // Fonction pour créer un nouvel utilisateur
    async createUser(req, res) {
        // Récupération des données utilisateur
        const {
            username,
            password,
            passwordConfirm,
            email,
        } = req.body;

        // Vérifier que les champs obligatoires ont été renseignés
        if (!username
            || !password
            || !passwordConfirm
            || !email) {
            throw new AuthError('Wrong input');
        }

        // Vérifier que le user n'existe pas déjà en BDD avec son email
        const userByEmail = await User.findOne('email', email);
        if (userByEmail) {
            throw new AuthError('Email already used');
        }

        // Vérifier que le user n'existe pas déjà avec son username
        const userByUsername = await User.findOne('username', username);
        if (userByUsername) {
            throw new AuthError('Username already used');
        }

        // Comparer les MDP
        if (password !== passwordConfirm) {
            throw new AuthError('Password and Password confirmation must match');
        }

        // Hashage du MDP
        const hashedPassword = hashSync(password, 10);

        // Création d'un nouvel utilisateur
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
        });

        // Insertion du nouvel utilisateur en BDD
        await newUser.create();
        res.status(200).json('New user created');
    },

    async login(req, res) {
        // Récupération des données utilisateur
        const { email, password } = req.body;

        // On vérifie que l'utilisateur a saisi toutes les infos
        if (!email || !password) {
            throw new AuthError('Invalid input');
        }

        // On vérifie que l'utilisateur existe bien en BDD
        const user = await User.findOne('email', email);
        if (!user) {
            throw new AuthError('This email does not exist');
        }

        // Comparaison du MDP saisi avec le hash
        const isPasswordCorrect = compareSync(password, user.password);
        if (!isPasswordCorrect) {
            throw new AuthError('Wrong password');
        }

        // Génération et envoi du token au client
        const token = jwt.create(user);
        res.json(token);
    },

    async getProfile(req, res) {
        // Renvoyer les infos personnelles de l'utilisateur
    },

    async updateProfile(req, res) {
        // Modifier les infos personnelles de l'utilisateur
    },

    async deleteProfile(req, res) {
        // Supprimer le profil d'un utilisateur
    },

    async getContactInfos(req, res) {
        // Récupérer les infos de contact de l'utilisateur prêteur
    },

    async getAllUsers(req, res) {
        const users = await User.findAll();
        res.json(users);
    },
};

module.exports = userController;
