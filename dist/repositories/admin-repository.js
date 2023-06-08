"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
function findAdminById(user_id) {
    console.log(user_id);
    return database_1.default.admins.findFirst({
        where: {
            user_id
        }
    });
}
function createAdmin(data) {
    return database_1.default.admins.create({
        data
    });
}
const adminRepository = {
    findAdminById,
    createAdmin
};
exports.default = adminRepository;
