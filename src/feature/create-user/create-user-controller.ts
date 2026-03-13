import { Controller, Post } from "@nestjs/common";
import { CreateUserHandler } from "./create-user-service";

@Controller('users')
export class UserController {

    constructor(private readonly userServicehandler: CreateUserHandler) { }

    @Post()
    async createUser() {
        await this.userServicehandler.handle();
        return 'User created and event stored in outbox table'
    }
}