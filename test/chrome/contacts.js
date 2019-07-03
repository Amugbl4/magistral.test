const assert = require('chai').assert;

const toggleClass = require('../functions/toggleClass');
const setStyle = require('../functions/setStyle');

describe('company page', function () {
    let browser;
    beforeEach(function () {
        browser = this.browser;
        browser
            .url('/contacts/users/')
            .waitForVisible('.preloader', 5000, true)
    });

    it('tabs', function () {
        return browser
            .assertView('tabs', '.contacts-tabs')
    });

    it('contacts-block-content', function () {
        return browser
            .execute(toggleClass, '.header', 'd-none')
            .assertView('contacts-block__content', '.contacts-block__content')
    });

    it('contacts-smi', function () {
        return browser
            .url('/contacts/contacts-smi/')
            .execute(toggleClass, '.header', 'd-none')
            .waitForVisible('.preloader', 5000, true)
            .assertView('contacts-block__content-smi', '.contacts-block__content')
    });

    it('form-feedback', function () {
        return browser
            .url('/contacts/feedback/')
            .execute(toggleClass, '.header', 'd-none')
            .waitForVisible('.preloader', 5000, true)
            .assertView('form-plain', '.contacts-block__content')
            .click('.contacts-block__submit > button')
            .waitForVisible('.preloader', 5000, true)
            .assertView('form-error', '.contacts-block__content')
    });
});