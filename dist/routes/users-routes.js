"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = __importDefault(require("../controllers/users-controllers"));
const validateSchema_1 = require("../middlewares/validateSchema");
const users_schema_1 = __importDefault(require("../schemas/users-schema"));
const userRoutes = (0, express_1.Router)();
userRoutes.post("/signup", (0, validateSchema_1.validateSchema)(users_schema_1.default), users_controllers_1.default.createUser);
exports.default = userRoutes;
