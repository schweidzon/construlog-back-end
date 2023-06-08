"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admins_controllers_1 = __importDefault(require("../controllers/admins-controllers"));
const adminRoutes = (0, express_1.Router)();
adminRoutes.get("/", admins_controllers_1.default.findAdminById).post("/signup", admins_controllers_1.default.createAdmin);
exports.default = adminRoutes;
