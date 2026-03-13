import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCreatedEvent } from "src/domain/user/events/user-created-event";
import { OutboxMessageRepository } from "src/infrastructure/repositories/outbox-message/outbox-message-repository";

// Application Layer
@Injectable()
// CreateUserHandler generate event and store that event in outbox table using outbox repository
export class CreateUserHandler {

    constructor(
        @InjectRepository(OutboxMessageRepository)
        private readonly outboxRepository: OutboxMessageRepository
    ) { }

    async handle() {
        const demoUserCreated = { uuid: '123', name: 'Bhavdeep', email: 'bhavdeep@gmail.com' };
        const userCreatedEvent = new UserCreatedEvent(demoUserCreated);

        await this.outboxRepository.storeOutboxMessage(userCreatedEvent);
    }
}