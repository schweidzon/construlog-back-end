"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../errors/errors"));
const admin_repository_1 = __importDefault(require("../repositories/admin-repository"));
const users_repository_1 = __importDefault(require("../repositories/users-repository"));
async function findAdminById(user_id) {
    await validateUserById(user_id);
    const admin = await validateAdminByUserId(user_id);
    if (!admin)
        throw errors_1.default.notFoundError();
    return admin;
}
async function createAdmin({ name, job, user_id }) {
    const user = await validateUserById(user_id);
    if (user.user_type !== "admin")
        throw errors_1.default.unauthorizedError();
    const admin = await validateAdminByUserId(user_id);
    if (admin)
        throw errors_1.default.conflictError("Administrador já registrado");
    const newAdmin = admin_repository_1.default.createAdmin({ name, job, user_id });
    return newAdmin;
}
async function validateUserById(user_id) {
    const checkUser = await users_repository_1.default.getUserById(user_id);
    if (!checkUser)
        throw errors_1.default.notFoundError();
    return checkUser;
}
async function validateAdminByUserId(user_id) {
    const admin = await admin_repository_1.default.findAdminById(user_id);
    return admin;
}
const adminService = {
    findAdminById,
    createAdmin,
};
exports.default = adminService;
