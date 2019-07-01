const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');

describe('main page ie', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/')
            .execute(toggleClass, '.swiper-slide__img-bg', 'no-scale')
            .execute((el) => {
                const element = document.querySelector(el);
                element.swiper.autoplay.stop();
            }, '.swiper-container')
    });
    it('header', function () {
        return browser
            .assertView('header', '.header')
    });

    it('header-fix', function () {
        return browser
            .scroll(0, 2500)
            .assertView('header-fix', '.header')
    })

    it('main', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('main-plain', 'body')
    });
});