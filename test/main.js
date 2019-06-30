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
            .execute(toggleClass, '.swiper-slide__img-bg', 'no-scale')
            .execute((el) => {
                const element = document.querySelector(el);
                element.swiper.autoplay.stop();
            }, '.swiper-container')
            .waitForVisible('.preloader', 5000, true)
    });
    // hermione.skip.in('mobile', 'not for mobile');
    it('header', function () {
        return browser
            .waitForVisible('.header', 3000)
            .assertView('header-plain', '.header')
    });

    // it('project-info', function () {
    //     return browser
    //         .execute(toggleClass, '.header', 'd-none')
    //         .scroll('.project__info')
    //         .assertView('project-info', '.project__info')
    // });

    // it('text-with-btn', function () {
    //     return browser
    //         .execute(toggleClass, '.header', 'd-none')
    //         .assertView('plain', '.content.user-text')
    // });
    // hermione.skip.in('mobile', 'not for mobile');
    it('mobile-app-block', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .waitForVisible('.advertising', 3000)
            .assertView('mobile-app', '.advertising')
    });

    it('news-card', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('news-card-one-plain', '.swiper-slide-active .news-card')
    });

    it('news-inner', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('news-inner-plain', '.news__inner')
    });

});