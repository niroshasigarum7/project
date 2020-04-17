describe(`The question detail component`, () => {
    beforeEach(() => {
        // console.log('Before each');
    });
    beforeAll(() => {
        // console.log('before All')
    })
    afterEach(() => {
        // console.log('after Each');
    })
    afterAll(() => {
        // console.log('after all');
    })
    // it.only(`should not regress`, () => {
    //     console.log('should not regress')
    // });
    it (`should display a ist of items`, () => {
        expect(40 + 2).toEqual(42);
    })
    it.skip(`should display a ist of items`, () => {
        expect(40 + 2).toEqual(49);
    })
    // test hangs if the callback is not called
    it ("async test 1", done => {
        setTimeout(done, 100);
    })
    it("async test 2", () => {
        return new Promise (
            resolve => setTimeout(resolve, 100)
        )
    });
    it("async test 3", () => {
        async () => await delay(100)
    })
    // mocking for question fetching saga
    
    // question details
    

});