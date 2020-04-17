import { delay } from 'redux-saga';

export default {
    async getNotifications() {
        console.warn("Real notification service ! Really contacting APIS!");
        await delay(1000);
        return { count: 42 }
    }
}
