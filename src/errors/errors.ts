import { ErrorType } from "../protocols/errorType";

function conflictError(message: string): ErrorType {
  return {
    name: "ConflictError",
    message,
  };
}

function notFoundError(): ErrorType {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

function invalidCredentials(): ErrorType {
  return {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect",
  };
}

function unauthorizedError(): ErrorType {
  return {
    name: "unauthorizedError",
    message: "Permission denied",
  };
}

export default {
  conflictError,
  notFoundError,
  invalidCredentials,
  unauthorizedError
};
