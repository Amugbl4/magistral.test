const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('main page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/search/')
            .waitForVisible('.preloader', 5000, true)
            .execute(toggleClass, '.main-wrapper', 'd-none')
    });

    it('header', function () {
        return browser
            .assertView('header', '.header')
    });

    it('footer', function () {
        return browser
            .assertView('footer', '.footer')
    });
});