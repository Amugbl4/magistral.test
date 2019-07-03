const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('company page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/company/policy/')
            .waitForVisible('.preloader', 5000, true)
    });

    it('chessboard', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('chessboard', '.chessboard', {ignoreElements:'.chessboard-item--img'})
    });

    it('section-large', function () {
        return browser
            .click('#labor-protection-tab')
            .execute(toggleClass, '.header', 'd-none')
            .assertView('section-large-1', '.section--large:nth-child(1)')
            .assertView('section-large-2', '.section--large:nth-child(2)')
            .assertView('section-large-3', '.section--large:nth-child(3)')
    });
});