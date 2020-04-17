import React from 'react';
import Tagslist from '../TagsList'
import renderer from 'react-test-renderer';

describe("The tags list", () => {
    it ("renders as expected", () => {
        const tree = renderer.create(<Tagslist tags={[`css`, `html`, `go`]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})