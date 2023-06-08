"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../errors/errors"));
const clients_repository_1 = __importDefault(require("../repositories/clients-repository"));
const users_repository_1 = __importDefault(require("../repositories/users-repository"));
async function findClientById(user_id) {
    await validateUserById(user_id);
    const client = await clients_repository_1.default.findClientById(user_id);
    if (!client)
        throw errors_1.default.notFoundError();
    return client;
}
async function createClient({ name, user_id }) {
    const user = await validateUserById(user_id);
    if (user.user_type !== 'client')
        throw errors_1.default.unauthorizedError();
    const client = await validateClientByUserId(user_id);
    if (client)
        errors_1.default.conflictError("Client já cadastrado");
    const newClient = await clients_repository_1.default.createClient({ name, user_id });
    return newClient;
}
async function validateUserById(user_id) {
    const checkUser = await users_repository_1.default.getUserById(user_id);
    if (!checkUser)
        throw errors_1.default.notFoundError();
    return checkUser;
}
async function validateClientByUserId(user_id) {
    const admin = await clients_repository_1.default.findClientByUserId(user_id);
    return admin;
}
async function getAllClients() {
    const clients = await clients_repository_1.default.getAllClients();
    if (!clients)
        throw errors_1.default.notFoundError();
    return clients;
}
const clientsService = {
    findClientById,
    createClient,
    getAllClients
};
exports.default = clientsService;
