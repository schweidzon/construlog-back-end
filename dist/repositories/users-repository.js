"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function createUser(data) {
    return database_1.default.users.create({
        data,
    });
}
async function getUserByEmail(email) {
    return database_1.default.users.findFirst({
        where: {
            email,
        },
    });
}
async function getUserById(user_id) {
    return database_1.default.users.findFirst({
        where: {
            id: user_id
        }
    });
}
const userRepository = {
    createUser,
    getUserByEmail,
    getUserById
};
exports.default = userRepository;
