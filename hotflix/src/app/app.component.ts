import { Component, OnInit } from '@angular/core';
import { MOVIES } from './dummy-movies';
import { Movie } from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{siteName}}</h1>
    <movie-add-form (formSubmit)="addMovie($event)"></movie-add-form>
    <movie-list [movies]="movies"></movie-list>
  `
})
export class AppComponent implements OnInit{
  siteName: string = 'HotFlix';
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService
      .getMovies()
      .then((res) => {
        this.movies = res.json();
      })
  }

  addMovie(movie: Movie) {
    this.movieService
      .addMovie(movie)
      .then(res => this.movieService.getMovies())
      .then(res => this.movies = res.json());
  }
}
