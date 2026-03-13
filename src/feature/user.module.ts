import { Module } from "@nestjs/common";
import { UserController } from "./create-user/create-user-controller";
import { CreateUserHandler } from "./create-user/create-user-service";
import { OutboxMessageRepository } from "src/infrastructure/repositories/outbox-message/outbox-message-repository";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [CreateUserHandler, OutboxMessageRepository]
})
export class UserModule { }