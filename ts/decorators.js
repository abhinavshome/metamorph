"use strict";
exports.__esModule = true;
exports.HasMusic = function (config) {
    return function (target) {
        console.log(target);
        target.prototype.play = function () {
            console.log(config.vehicle + 'O! La! La!');
        };
    };
};
var X = (function () {
    function X() {
    }
    return X;
}());
exports.X = X;
