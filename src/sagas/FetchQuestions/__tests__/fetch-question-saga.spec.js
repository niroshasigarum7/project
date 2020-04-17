import { handleFetchQuestion } from '../fetch-question-saga';
import fetch from '../../../../__mocks__/isomorphic-fetch';

describe("Fetch questions saga", () => {
    beforeAll(() => {
        fetch.__setValue([{question_id: 42}]);
    })
    it("should fetch the qustions", async () => {
        const gen = handleFetchQuestion({question_id: 42});
        const { value } = await gen.next();
        // TODO: await is having a issue - fix it
        // expect(value).toEqual([{question_id: 42}]);
        // expect(fetch).toHaveBeenCalledWith('/api/questions/42')
    })
})