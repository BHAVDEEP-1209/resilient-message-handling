export type OutboxMessagePayloadType = {
    message_id: string;
    type: string;
    exchange: string;
    routing_key: string;
    properties: OutboxMessagePropertiesType;
    headers: OutboxMessageHeadersType;
    body: OutboxMessageBodyType;
};

type OutboxMessageHeadersType = {
    type: string;
    content_type: string;
};

type OutboxMessagePropertiesType = {
    messageId: string;
    type: string;
    appId: string;
    contentType: string;
    headers: OutboxMessageHeadersType;
};

type OutboxMessageBodyType = {
    [key: string]: any;
};
