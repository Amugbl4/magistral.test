// const toggleClass = function
module.exports = function toggleClass(selector, toggleClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
        el.classList.toggle(toggleClass);
    });
};
