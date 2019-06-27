module.export = function swiperAutoPlayOff(selector) {
    const element = document.querySelector(selector);
    element.swiper.autoplay.stop();
};