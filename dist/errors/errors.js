"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function conflictError(message) {
    return {
        name: "ConflictError",
        message,
    };
}
function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}
function invalidCredentials() {
    return {
        name: "InvalidCredentialsError",
        message: "email or password are incorrect",
    };
}
function unauthorizedError() {
    return {
        name: "unauthorizedError",
        message: "Permission denied",
    };
}
exports.default = {
    conflictError,
    notFoundError,
    invalidCredentials,
    unauthorizedError
};
