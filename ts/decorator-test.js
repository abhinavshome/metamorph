"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var decorators_1 = require("./decorators");
var Car = (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log('moving..');
    };
    Car = __decorate([
        decorators_1.HasMusic({
            vehicle: 'Car'
        })
    ], Car);
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck = __decorate([
        decorators_1.HasMusic({
            vehicle: 'Truck'
        })
    ], Truck);
    return Truck;
}());
var c = new Car();
c.move();
c.play();
var t = new Truck();
t.play();
