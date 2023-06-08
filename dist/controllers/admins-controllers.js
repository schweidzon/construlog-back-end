"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_service_1 = __importDefault(require("../services/admin-service"));
async function findAdminById(req, res, next) {
    const userId = Number(req.query.user_id);
    try {
        const admin = await admin_service_1.default.findAdminById(userId);
        return res.send(admin);
    }
    catch (error) {
        next(error);
    }
}
async function createAdmin(req, res, next) {
    const { name, job, user_id } = req.body;
    try {
        const admin = await admin_service_1.default.createAdmin({ name, job, user_id });
        return res.status(201).send(admin);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}
const adminController = {
    findAdminById,
    createAdmin,
};
exports.default = adminController;
