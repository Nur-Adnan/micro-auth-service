import { UserService } from "./../services/UserService";
import { AuthController } from "./../controllers/AuthController";
import express from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
const userService = new UserService(userRepository);
const authController = new AuthController(userService);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post("/register", (req, res) => authController.register(req, res));

export default router;
