import { Injectable } from "@nestjs/common";
import { Command } from "src/domain/common/command";
import { OutboxMessage } from "src/domain/outbox/outbox-message-entity";
import { DataSource, Repository } from "typeorm";
import { OutboxMessagePayloadType } from "./outbox-message.interface";
import { Event } from "src/domain/common/event";
import { MessageDestinationService } from "./message-destination.service";

@Injectable()
export class OutboxMessageRepository extends Repository<OutboxMessage> {
    constructor(dataSource: DataSource) {
        super(OutboxMessage, dataSource.createEntityManager());
    }

    createOutboxPayloadFromEvent = (outbox_message: Event | Command): OutboxMessagePayloadType => {

        const messageType = outbox_message.getType();
        const { exchange, routingKey } = MessageDestinationService.get(messageType);

        return {
            message_id: outbox_message.getId(),
            type: messageType,
            exchange: exchange,
            routing_key: routingKey,
            properties: outbox_message.getProperties(),
            headers: outbox_message.getHeaders(),
            body: outbox_message.getPayload(),
        };
    };

    async storeOutboxMessage(outbox_message: Event | Command) {
        return await this.save(this.createOutboxPayloadFromEvent(outbox_message));
    }

}