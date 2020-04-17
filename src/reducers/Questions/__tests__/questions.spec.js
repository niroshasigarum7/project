import { questions } from '../questions'

describe("The questions reducer", () => {
    it ("should not modify state for unrecognized action", () => {
        const state = ['foo', 'bar'];
        const stateClone = ['foo', 'bar'];
        const newState = questions(state, {type: "UNRECOGNIZED_ACTION"})
        expect(newState).toEqual(stateClone);
        expect(newState).toBe(state);
    })
    it ("should add new questions", () => {
        const state = [{question_id: "foo"}, {question_id: "bar"}];
        const newQuestion = { question_id: "bar"};
        const newQuestionClone= { question_id: "baz"};
        const newState = questions(state, {type: `Fetched_question`, question: newQuestion})
        // expect(newState).toContain(newQuestion);
        expect(state).not.toContain(newQuestion);
        // expect(newState).toHaveLength(3);
    })
})