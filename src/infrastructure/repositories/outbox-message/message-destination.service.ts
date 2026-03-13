export interface MessageDestination {
    exchange: string;
    routingKey: string;
}

export class MessageDestinationService {
    private static destinations: Record<string, MessageDestination> = {
        'bhavdeep.user_management.user_created': {
            exchange: 'bhavdeep-a',
            routingKey: '',
        }
    };

    static get(messageType: string): MessageDestination {
        return this.destinations[messageType];
    }
}