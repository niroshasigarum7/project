import { mapStateToProps } from '../QuestionDetail'
import QuestionDetailDisplay from '../QuestionDetail'
import renderer from 'react-test-renderer'
import React from 'react'
import { render } from 'react-dom';

describe('The question detail component', () => {
    describe(" the container element", () => {
        describe('mapStateToProps', () => {
            it ("should map state to props correctly", () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                };
                const appState = {
                    questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id: 42
                };
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(sampleQuestion);
            })
        })
    });
    // TODO: make this work
    // describe("The display element", () => {
    //     it("should not regress", () => {
    //         const tree = renderer.create(
    //                 <QuestionDetailDisplay
    //                     title="The meaning of life"
    //                     body="43"
    //                     answer_count={0}
    //                     tags={[`hitchhiking`]}
    //                 />
    //         )
    //         expect(tree).toMatchSnapshot()
    //     })
    // });
})