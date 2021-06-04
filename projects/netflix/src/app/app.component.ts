import { Component } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { modalFadeIn } from './animations/modal-animation';
import { routeAnimations } from './animations/route-animations';
import { MoviePreviewService } from './services/movie-preview.service';
import { MoviesService } from './services/movies.service';
import { VideoIdService } from './services/video-id.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations, modalFadeIn],
})
export class AppComponent {
  public showModal!: boolean;
  constructor(
    public router: Router,
    private videoIdService: VideoIdService,
    private moviePreview: MoviePreviewService,
    private movieService: MoviesService
  ) {}

  //video id Observable to pass to the trailer component in the template
  public trailerId = this.videoIdService.trailerKey$;
  //Movie or Show Object to pass to the info component in the template
  public movieInfo = this.moviePreview.preview$;
  // All media images url
  public movieImages = this.movieService.IMAGES;

  public onClosePlayer(): void {
    this.videoIdService.removeTrailer();
  }

  public onClosePreview(): void {
    this.moviePreview.closePreview();
  }

  get textToShow(): string {
    return this.router.url === '/' ? 'LOG IN' : 'LOG OUT';
  }

  public getRouteState(outlet: RouterOutlet): string {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  public get showOrHide(): boolean {
    return !(this.router.url === '/' || this.router.url == '/login');
  }

  public onShowModal(value: boolean): void {
    this.showModal = !this.showModal;
    value ? this.router.navigate(['/']) : null;
  }
}
