module.export = function setStyle(selector, css) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
        el.setAttribute('style', el.getAttribute('style') + ';' + css);
    });
}