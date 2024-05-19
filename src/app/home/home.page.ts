import { MovieService } from './../services/movie.service';
import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonSkeletonText,
  IonAvatar,
  IonAlert,
  IonLabel,
  IonBadge,
  IonList,
} from '@ionic/angular/standalone';
import { catchError, finalize } from 'rxjs';
import { Movie } from '../services/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonSkeletonText,
    IonAvatar,
    IonAlert,
    IonLabel,
    RouterModule,
    IonBadge,
    IonList,
  ],
})
export class HomePage {
  private movieService = inject(MovieService);
  public error = null;
  public isLoading = false;
  public movies: Movie[] = [];
  public dummyArray = new Array(5);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.error = null;

    this.movieService
      .getMovies()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
        catchError((err: any) => {
          console.log(err);
          this.error = err;
          return [];
        })
      )
      .subscribe({
        next: (movies) => {
          this.movies.push(...movies);
        },
      });
  }
}
