import {
  Component,
  Input,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonItem,
} from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { Movie } from '../services/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
  ],
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public movie: WritableSignal<Movie | null> = signal<Movie | null>(null);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  @Input()
  set id(movieId: number) {
    this.movieService.getMovieById(movieId).subscribe((movie) => {
      this.movie.set(movie);
    });
  }

  constructor() {}
}
