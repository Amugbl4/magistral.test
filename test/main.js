const assert = require('chai').assert;

const toggleClass = require('./functions/toggleClass');
const swiperAutoPlayOff = require('./functions/swiperAutoPlayOff');
const setStyle = require('./functions/setStyle');

describe('main page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/')
            // .execute('.swiper-wrapper', 'transition:none !important')
            .execute(toggleClass, '.swiper-slide__img-bg', 'no-scale')

    });

    hermione.skip.in('ie11', 'only for chrome');
    it('header', function () {
        return browser
            // .execute(swiperAutoPlayOff, '.swiper-container')
            .execute(toggleClass, '.header', 'd-none')
            .clickIfAvailable('.header__client-link')
            .assertView('header', '.header')
    });
});