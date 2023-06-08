"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function findClientById(user_id) {
    return database_1.default.clients.findFirst({
        where: {
            user_id
        }
    });
}
function findClientByUserId(user_id) {
    return database_1.default.clients.findFirst({
        where: {
            user_id
        }
    });
}
function createClient(data) {
    return database_1.default.clients.create({
        data
    });
}
function getAllClients() {
    return database_1.default.clients.findMany({});
}
const clientsRepository = {
    findClientById,
    findClientByUserId,
    createClient,
    getAllClients
};
exports.default = clientsRepository;
