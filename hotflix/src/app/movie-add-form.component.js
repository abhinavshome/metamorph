"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MovieAddFormComponent = (function () {
    function MovieAddFormComponent() {
        this.formSubmit = new core_1.EventEmitter();
    }
    MovieAddFormComponent.prototype.addMovie = function (title, year, rating, thumbnail) {
        var newMovie = {
            title: title.value,
            year: +year.value,
            rating: +rating.value,
            thumbnail: thumbnail.value
        };
        this.formSubmit.emit(newMovie);
    };
    return MovieAddFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MovieAddFormComponent.prototype, "formSubmit", void 0);
MovieAddFormComponent = __decorate([
    core_1.Component({
        selector: 'movie-add-form',
        template: "\n        <div>\n        <input type=\"text\" #title placeholder=\"Title\"/><br/>\n        <input type=\"text\" #year placeholder=\"Year\"/><br/>\n        <input type=\"text\" #rating placeholder=\"Rating\"/><br/>\n        <input type=\"text\" #thumbnail placeholder=\"Thumbnail\"/><br/>\n        <button (click)=\"addMovie(title, year, rating, thumbnail)\">\n            Add\n        </button>\n        </div>\n    "
    })
], MovieAddFormComponent);
exports.MovieAddFormComponent = MovieAddFormComponent;
//# sourceMappingURL=movie-add-form.component.js.map