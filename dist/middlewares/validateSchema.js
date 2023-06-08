"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const http_status_1 = __importDefault(require("http-status"));
function validateSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(http_status_1.default.BAD_REQUEST).send(error.details.map((detail) => detail.message));
        }
        next();
    };
}
exports.validateSchema = validateSchema;
