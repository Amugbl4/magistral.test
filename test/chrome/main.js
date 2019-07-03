const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('main page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/')
            .execute(toggleClass, '.swiper-container', 'd-none')
            .waitForVisible('.preloader', 5000, true)
    });

    it('mobile-app-block', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .waitForVisible('.advertising', 3000)
            .assertView('mobile-app', '.advertising')
    });

    hermione.skip.in('mobile', 'not for mobile');
    it('situation', function () {
        return browser
            .execute((el) => {
                const element = document.querySelector(el);
                element.swiper.autoplay.stop();
            }, '.situation-slider')
            .assertView('situation-block', '.situation')
    });

    hermione.skip.notIn('mobile', 'only for mobile');
    it('situation-mob', function () {
        return browser
            .click('.situation')
            .execute((el) => {
                const element = document.querySelector(el);
                element.swiper.autoplay.stop();
            }, '.situation-slider')
            .assertView('situation-block-block', '.situation')
    });

    hermione.skip.in('mobile', 'not for mobile');
    it('blog-link', function () {
        return browser
            .assertView('blog-link-one', '.under-slider > a:nth-child(1)')
    });

    hermione.skip.in('mobile', 'not for mobile');
    it('zsd-block', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('zsd-plain', '.zsd')
    });

    hermione.skip.in('mobile', 'not for mobile');
    it('project-block', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('project-plain', '.project')
    });


    it('news-card', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('news-card-one-plain', '.swiper-slide-active .news-card', {ignoreElements: '.news-card__img'})
    });

    it('news-block', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('news-inner-plain', '.news', {ignoreElements: '.news-card__img'})
    });

});