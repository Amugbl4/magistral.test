const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('menu', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/search/')
            .waitForVisible('.preloader', 5000, true)
    });

    it('header-plain', function () {
        return browser
            .execute(toggleClass, '.main-wrapper', 'd-none')
            .assertView('header', '.header')
    });

    hermione.skip.in('mobile', 'not for mobile');
    it('menu-pc', function () {
        return browser
            .click('.header__client-menu')
            .assertView('pc-menu-plain', '.menu-pc')
            .moveToObject('.menu-pc__link:nth-child(1)')
            .assertView('pc-menu-hover', '.menu-pc')
    })

    it('footer', function () {
        return browser
            .execute(toggleClass, '.main-wrapper', 'd-none')
            .assertView('footer', '.footer')
    });
});