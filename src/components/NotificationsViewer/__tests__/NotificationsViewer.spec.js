import NotificationsViewer from "../NotificationsViewer"
import renderer from 'react-test-renderer';
import React from 'react';
import delay from 'redux-saga';

jest.mock('../../../services/NotificationsService')

// reuire vs import - behaviour is diffrent 
const notificationsService = require('../../../services/NotificationsService').default;
describe("Notification viewer", () => {
    beforeAll(() => {
        notificationsService.__setCount(5);
    });
    it ("should display the correct number of notifications", async () => {
        const tree = renderer.create(
            <NotificationsViewer />
        )
        // to wait till all the lifecycle hooks have called and fetched data
        await delay();
        const instance = tree.root;
        const component = instance.findByProps({
            className: `notifications`
        });
        const text = component.children[0];
        expect(text).toEqual("5 Notifications Awaiting!")
    })
})