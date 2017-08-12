import { Component, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'movie-add-form',
    template: `
        <div>
        <input type="text" #title placeholder="Title"/><br/>
        <input type="text" #year placeholder="Year"/><br/>
        <input type="text" #rating placeholder="Rating"/><br/>
        <input type="text" #thumbnail placeholder="Thumbnail"/><br/>
        <button (click)="addMovie(title, year, rating, thumbnail)">
            Add
        </button>
        </div>
    `
})
export class MovieAddFormComponent {

    constructor(
        private movieService: MovieService,
        private router: Router
    ) {

    }

    addMovie(
        title: HTMLInputElement,
        year: HTMLInputElement,
        rating: HTMLInputElement,
        thumbnail: HTMLInputElement
    ) {
        let newMovie: Movie = {
            title: title.value,
            year: +year.value,
            rating: +rating.value,
            thumbnail: thumbnail.value
        }
        this.movieService
            .addMovie(newMovie)
            .then(res => this.router.navigate(['/movies']));
    }
}