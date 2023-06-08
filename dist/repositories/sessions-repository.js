"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function createSession(data) {
    return database_1.default.session.create({ data });
}
const sessionRepository = {
    createSession
};
exports.default = sessionRepository;
