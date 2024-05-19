import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  BASE_URL = 'https://localhost:7260/api';

  constructor() {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.BASE_URL}/Movie`);
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(`${this.BASE_URL}/Movie/${id}`);
  }
}
