"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_controller_1 = __importDefault(require("../controllers/clients-controller"));
const clientRoutes = (0, express_1.Router)();
clientRoutes.get("/", clients_controller_1.default.findClientById).post("/signup", clients_controller_1.default.createClient).get("/all", clients_controller_1.default.getAllClients);
exports.default = clientRoutes;
