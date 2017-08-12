import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { MOVIES } from './dummy-movies';
import { Movie } from './movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {
    url = 'http://localhost:4000/movies';
    headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http) {

    }

    getMovies() {
        return this.http
            .get(this.url)
            .toPromise();
    }

    getMovie(movieId: number) {
        return this.http
            .get(this.url + '/' + movieId)
            .toPromise();
    }

    addMovie(movie: Movie) {
        return this.http
            .post(this.url, movie, {headers: this.headers}) 
            .toPromise();
    }
}