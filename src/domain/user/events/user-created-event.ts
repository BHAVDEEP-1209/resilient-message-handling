import { Event } from 'src/domain/common/event';

export class UserCreatedEvent extends Event {
    type =
        'bhavdeep.user_management.user_created';

    getBody() {
        return {
            user_info: {
                uuid: this.payload.uuid,
            },
        };
    }
}
