"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_service_1 = __importDefault(require("../services/clients-service"));
async function findClientById(req, res, next) {
    const userId = Number(req.query.user_id);
    try {
        const client = await clients_service_1.default.findClientById(userId);
        return res.send(client);
    }
    catch (error) {
        next(error);
    }
}
async function createClient(req, res, next) {
    const { name, user_id } = req.body;
    try {
        const client = await clients_service_1.default.createClient({ name, user_id });
        return res.status(201).send(client);
    }
    catch (error) {
        next(error);
    }
}
async function getAllClients(req, res, next) {
    console.log('poi');
    try {
        const clients = await clients_service_1.default.getAllClients();
        return res.send(clients);
    }
    catch (error) {
        next(error);
    }
}
const clientsController = {
    findClientById,
    createClient,
    getAllClients
};
exports.default = clientsController;
