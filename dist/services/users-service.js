"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = __importDefault(require("../repositories/users-repository"));
const errors_1 = __importDefault(require("../errors/errors"));
const bcrypt_1 = __importDefault(require("bcrypt"));
async function createUser({ email, password, user_type }) {
    await validateEmail(email);
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await users_repository_1.default.createUser({
        email,
        password: hashedPassword,
        user_type,
    });
    console.log(user);
    return user;
}
async function validateEmail(email) {
    const checkEmail = await users_repository_1.default.getUserByEmail(email);
    if (checkEmail)
        throw errors_1.default.conflictError("Email already exists");
}
const userService = {
    createUser,
};
exports.default = userService;
