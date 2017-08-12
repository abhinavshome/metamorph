import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './movie-list.component';
import { MovieAddFormComponent } from './movie-add-form.component';
import { MovieService } from './movie.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule
   ],
  declarations: [ 
    AppComponent,
    MovieListComponent,
    MovieAddFormComponent
  ],
  providers: [
    MovieService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
