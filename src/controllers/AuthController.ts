import { Response } from "express";
import { RegisterUserRequest } from "../types";
import { UserService } from "../services/UserService";

export class AuthController {
    /* 
    userService: UserService;
    
    constructor(userService: UserService) {
        this.userService = userService;
    }
    */

    constructor(private userService: UserService) {}

    async register(req: RegisterUserRequest, res: Response) {
        const { firstName, lastName, email, password } = req.body;
        /* Don't use it like that way, because if we use this thing like this way, then this file fully depended on the UserService file. So, for that reason we need, dependency injection

            const userService = new UserService();
            userService.create({firstName, lastName, email, password});
        */
        await this.userService.create({ firstName, lastName, email, password });
        res.status(201).json();
    }
}
