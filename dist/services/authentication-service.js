"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = __importDefault(require("../repositories/users-repository"));
const errors_1 = __importDefault(require("../errors/errors"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sessions_repository_1 = __importDefault(require("../repositories/sessions-repository"));
const exclude_util_1 = require("../utils/exclude-util");
async function signIn({ email, password }) {
    const user = await checkUser(email);
    await validatePassowrd(password, user.password);
    const token = await createSession(user.id);
    console.log(token);
    return {
        user: (0, exclude_util_1.exclude)(user, 'password'),
        token
    };
}
async function checkUser(email) {
    const user = await users_repository_1.default.getUserByEmail(email);
    if (!user)
        throw errors_1.default.notFoundError();
    return user;
}
async function validatePassowrd(passowrd, userPassword) {
    const checkPassword = await bcrypt_1.default.compare(passowrd, userPassword);
    if (!checkPassword)
        throw errors_1.default.invalidCredentials();
}
async function createSession(userId) {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET || "senha_secreta");
    await sessions_repository_1.default.createSession({ token, user_id: userId });
    return token;
}
const authService = {
    signIn,
};
exports.default = authService;
