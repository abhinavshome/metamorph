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
var movie_service_1 = require("./movie.service");
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.siteName = 'HotFlix';
        this.movies = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService
            .getMovies()
            .then(function (res) {
            _this.movies = res.json();
        });
    };
    AppComponent.prototype.addMovie = function (movie) {
        var _this = this;
        this.movieService
            .addMovie(movie)
            .then(function (res) { return _this.movieService.getMovies(); })
            .then(function (res) { return _this.movies = res.json(); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{siteName}}</h1>\n    <movie-add-form (formSubmit)=\"addMovie($event)\"></movie-add-form>\n    <movie-list [movies]=\"movies\"></movie-list>\n  "
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map