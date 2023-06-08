"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
function handleErrors(err, req, res, next) {
    if (err.name === "ConflictError") {
        return res.status(http_status_1.default.CONFLICT).send({
            message: err.name
        });
    }
    if (err.name === "NotFoundError") {
        return res.status(http_status_1.default.NOT_FOUND).send({
            message: err.message
        });
    }
    if (err.name === "InvalidCredentialsError") {
        return res.status(http_status_1.default.UNAUTHORIZED).send({
            message: err.message
        });
    }
    if (err.name === 'unauthorizedError') {
        return res.status(http_status_1.default.UNAUTHORIZED).send({
            message: err.message
        });
    }
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error"
    });
}
exports.default = handleErrors;
