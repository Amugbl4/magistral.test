const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('leadership page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/company/leadership/')
            .waitForVisible('.preloader', 5000, true)
    });

    it('tabs', function () {
        return browser
            .assertView('tabs-plain', '.nav-tabs')
    });

    it('leadership-blue-block', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('leadership__blue-block', '.leadership__blue-block:nth-child(1)')
    });

    it('leader-card', function () {
        return browser
            .click('#the-board-tab')
            .waitForVisible('.preloader', 5000, true)
            .assertView('people-card', '.people-card', {ignoreElements: '.people-card__img'})
    });

    it('leader-cards', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .click('#the-board-tab')
            .waitForVisible('.preloader', 5000, true)
            .assertView('people-cards', '.leadership__cards', {ignoreElements: '.people-card__img'})
    });

    it('main-card', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .click('#ceo-tab')
            .waitForVisible('.preloader', 5000, true)
            .assertView('big-boss-card', '.big-card')
    });
});