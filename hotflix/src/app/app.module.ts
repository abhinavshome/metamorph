import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './movie-list.component';
import { MovieAddFormComponent } from './movie-add-form.component';
import { PlayComponent } from './play.component';
import { MovieService } from './movie.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'movies',
        component: MovieListComponent
      },
      {
        path: 'add-movie',
        component: MovieAddFormComponent
      },
      {
        path: 'play/:movieId',
        component: PlayComponent
      },
      {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
      }
    ])
   ],
  declarations: [ 
    AppComponent,
    MovieListComponent,
    MovieAddFormComponent,
    PlayComponent
  ],
  providers: [
    MovieService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
