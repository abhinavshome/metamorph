import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{siteName}}</h1>
    <a routerLink="/movies" routerLinkActive="current">Movies</a> |
    <a routerLink="/add-movie" routerLinkActive="current">Add Movie</a> 
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  siteName: string = 'HotFlix';
}
