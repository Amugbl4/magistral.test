module.exports = {

    baseUrl: 'https://magistral.uplab.digital/',
    screenshotDelay: 3000,
    sessionsPerBrowser: 2,
    sets: {
        chrome: {
            files: 'test/chrome',
            browsers: ['chrome_2k', 'chrome_1440', 'chrome_1920', 'mobile']
        },
        ie: {
            files: 'test/ie',
            browsers: ['ie11_1440']
        }
    },

    browsers: {
        chrome_2k: {
            compositeImage: true,
            windowSize: '2560x1440',
            screenshotsDir: 'screen/chrome',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            }
        },

        chrome_1920: {
            compositeImage: true,
            windowSize: '1920x1080',
            screenshotsDir: 'screen/chrome',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            }
        },

        chrome_1440: {
            compositeImage: true,
            windowSize: '1440x900',
            screenshotsDir: 'screen/chrome',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            }
        },

        mobile: {
            screenshotsDir: 'screen/chrome',
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    mobileEmulation: {
                        deviceMetrics: {
                            width: 320,
                            height: 568,
                            pixelRatio: 2.0
                        },
                        userAgent: [
                           'Mozilla/5.0',
                           '(iPhone; CPU iPhone OS 10_1_1 like Mac OS X)',
                           'AppleWebKit/602.2.14',
                           '(KHTML, like Gecko)',
                           'Version/10.0',
                           'Mobile/14B100',
                           'Safari/602.1'
                       ].join(' ')
                    },
                    args: ['--headless']
                }
            }
        },


        // ie11_1920: {
        //     compositeImage: true,
        //     windowSize: '1920x1080',
        //     screenshotsDir: 'screen/ie',
        //     desiredCapabilities: {
        //         browserName: 'internet explorer',
        //         version: '11',
        //         'ie.enableFullPageScreenshot': false
        //     },
        //
        // },
        //
        //
        ie11_1440: {
            compositeImage: true,
            windowSize: '1440x900',
            screenshotsDir: 'screen/ie/',
            desiredCapabilities: {
                browserName: 'internet explorer',
                version: '11',
                'ie.enableFullPageScreenshot': false
            },
        },
    },

    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            path: 'hermione-reports',
            defaultView: 'all'
        },
        'hermione-image-minifier': {
            enabled: true,
            compressionLevel: 5 // maximal compression, but takes the most time
        }
    },


    prepareBrowser: function (browser) {
        var _click = function clickIfAvailable(selector) {
            var _this = this;

            return this.element(selector).then(function (elem) {

                if (!elem.value) {

                    return false;
                }

                return _this.elementIdClick(elem.value.ELEMENT);
            });
        };
        browser.addCommand('clickIfAvailable', _click);
    },
};