import joi from "joi";
import { users } from "@prisma/client";

const authSchema = joi.object<Omit<users, "id" | "user_type">>({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export default authSchema;
