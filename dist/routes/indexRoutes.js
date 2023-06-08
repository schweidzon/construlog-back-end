"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = __importDefault(require("./users-routes"));
const authentication_routes_1 = __importDefault(require("./authentication-routes"));
const clients_routes_1 = __importDefault(require("./clients-routes"));
const admins_routes_1 = __importDefault(require("./admins-routes-"));
const routes = (0, express_1.Router)();
routes.use("/users", users_routes_1.default).use("/signin", authentication_routes_1.default).use("/clients", clients_routes_1.default).use("/admins", admins_routes_1.default);
exports.default = routes;
