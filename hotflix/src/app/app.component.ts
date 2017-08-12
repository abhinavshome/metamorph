import { Component } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './dummy-movies';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{siteName}}</h1>
    <div>
      <input type="text" #title placeholder="Title"/><br/>
      <input type="text" #year placeholder="Year"/><br/>
      <input type="text" #rating placeholder="Rating"/><br/>
      <input type="text" #thumbnail placeholder="Thumbnail"/><br/>
      <button (click)="addMovie(title, year, rating, thumbnail)">
        Add
      </button>
    </div>
    <table>
      <tr *ngIf="selectedMovie">
        <td><img src="{{selectedMovie.thumbnail}}"/></td>
        <td colspan="2">
          <b>{{selectedMovie.title}}</b><br/>
          <i>{{selectedMovie.year}}</i><br/>
          <button>Play</button>
        </td>
      </tr>
      <tr 
        *ngFor="let movie of movies"
        (click)="selectMovie(movie)"
        [class.selected]="selectedMovie==movie"
        >
        <td class="rating">{{movie.rating}}</td>
        <td><img [src]="movie.thumbnail"/></td>
        <td>
          <b>{{movie.title}}</b><br/>
          <i>{{movie.year}}</i>
        </td>
      </tr>
    </table>
  `,
  styles: [`
    .rating {font-size: 200%;}
    .selected {background-color: lightyellow;}
  `]
})
export class AppComponent {
  siteName: string = 'HotFlix';
  movies: Movie[] = MOVIES;
  selectedMovie: Movie;

  selectMovie(movie:Movie) {
    this.selectedMovie = movie;
  }

  addMovie(
      title: HTMLInputElement,
      year: HTMLInputElement,
      rating: HTMLInputElement,
      thumbnail: HTMLInputElement
    ) {
    let newMovie : Movie = {
      title: title.value,
      year: +year.value,
      rating: +rating.value,
      thumbnail: thumbnail.value
    }
    this.movies.push(newMovie);
    title.value = '';
    year.value = '';
    rating.value = '';
    thumbnail.value = '';
  }
}
