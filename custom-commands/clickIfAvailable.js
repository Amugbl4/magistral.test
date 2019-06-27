module.export = function clickIfAvailable(selector) {
    var _this = this;

    return this.element(selector).then(function (elem) {

        if (!elem.value) {

            return false;
        }

        return _this.elementIdClick(elem.value.ELEMENT);
    });
};