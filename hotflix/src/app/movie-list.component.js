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
var router_1 = require("@angular/router");
var MovieListComponent = (function () {
    function MovieListComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    MovieListComponent.prototype.selectMovie = function (movie) {
        this.selectedMovie = movie;
    };
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService
            .getMovies()
            .then(function (res) {
            _this.movies = res.json();
        });
    };
    MovieListComponent.prototype.goToPlay = function () {
        this.router.navigate(['/play', this.selectedMovie.id]);
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movie-list',
        template: "\n    <table>\n      <tr *ngIf=\"selectedMovie\">\n        <td><img src=\"{{selectedMovie.thumbnail}}\"/></td>\n        <td colspan=\"2\">\n          <b>{{selectedMovie.title}}</b><br/>\n          <i>{{selectedMovie.year}}</i><br/>\n          <button (click)=\"goToPlay()\">Play</button>\n        </td>\n      </tr>\n      <tr \n        *ngFor=\"let movie of movies\"\n        (click)=\"selectMovie(movie)\"\n        [class.selected]=\"selectedMovie==movie\"\n        >\n        <td class=\"rating\">{{movie.rating}}</td>\n        <td><img [src]=\"movie.thumbnail\"/></td>\n        <td>\n          <b>{{movie.title}}</b><br/>\n          <i>{{movie.year}}</i>\n        </td>\n      </tr>\n    </table>\n  ",
        styles: ["\n    .rating {font-size: 200%;}\n    .selected {background-color: lightyellow;}\n  "]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.Router])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map