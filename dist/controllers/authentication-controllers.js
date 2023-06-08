"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_service_1 = __importDefault(require("../services/authentication-service"));
async function signIn(req, res, next) {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await authentication_service_1.default.signIn({ email, password });
        return res.send(user);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
const authController = {
    signIn
};
exports.default = authController;
