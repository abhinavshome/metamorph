import { Component } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './dummy-movies';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
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
  title: string = 'HotFlix';
  movies: Movie[] = MOVIES;
  selectedMovie: Movie;

  selectMovie(movie:Movie) {
    this.selectedMovie = movie;
  }
}
