const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('company page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/company')
            .waitForVisible('.preloader', 5000, true)
    });

    it('hero', function () {
        return browser
            .execute(toggleClass, '.info-box__wrapper', 'd-none')
            .assertView('hero', '.hero')
    });

    it('info-box', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('info-box', '.info-box__wrapper:nth-child(1)')
    });

    it('info-text-box', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('info-text-box', '.info-text-box')
    });

    it('section--light-grey', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('section-grey', '.section--light-grey')
    });

    it('accordeon', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('accordeon-plain', '.section__accordion')
    });
});