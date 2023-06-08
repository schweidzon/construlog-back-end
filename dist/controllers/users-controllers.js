"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users-service"));
async function createUser(req, res, next) {
    const { email, password, user_type } = req.body;
    try {
        const user = await users_service_1.default.createUser({ email, password, user_type });
        res.status(201).send(user);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
const usersControllers = {
    createUser,
};
exports.default = usersControllers;
