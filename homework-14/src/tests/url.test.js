import Model from '../js/Model.js';

describe('Model class', () => {
    it('should check url.value', () => {
        const model = new Model;
        const url = {
            value : 'https://www.youtube.com/watch?v=h1F3LaYO3jo',
        };

        expect(model.link(url)).toBeTruthy();
    });
    it('should check existing url in urls', () => {
        const model = new Model;
        const url = {
            value : 'https://www.youtube.com/watch?v=h1F3LaYO3jo',
        };
        expect (model.alredyIn(url)).toBeFalsy();
    })
});
