"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var dummy_movies_1 = require("./dummy-movies");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'HotFlix';
        this.movies = dummy_movies_1.MOVIES;
    }
    AppComponent.prototype.selectMovie = function (movie) {
        this.selectedMovie = movie;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <table>\n      <tr *ngIf=\"selectedMovie\">\n        <td><img src=\"{{selectedMovie.thumbnail}}\"/></td>\n        <td colspan=\"2\">\n          <b>{{selectedMovie.title}}</b><br/>\n          <i>{{selectedMovie.year}}</i><br/>\n          <button>Play</button>\n        </td>\n      </tr>\n      <tr \n        *ngFor=\"let movie of movies\"\n        (click)=\"selectMovie(movie)\"\n        [class.selected]=\"selectedMovie==movie\"\n        >\n        <td class=\"rating\">{{movie.rating}}</td>\n        <td><img [src]=\"movie.thumbnail\"/></td>\n        <td>\n          <b>{{movie.title}}</b><br/>\n          <i>{{movie.year}}</i>\n        </td>\n      </tr>\n    </table>\n  ",
        styles: ["\n    .rating {font-size: 200%;}\n    .selected {background-color: lightyellow;}\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map