import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  proximosEstrenos: any[] = [];
  populares: any[] = [];
  bests: any[] = [];

  constructor(public peliculasservice: PeliculasService) {

    this.peliculasservice.getPopulares().subscribe
   ( (data: any) =>  this.populares = data.results );

    this.peliculasservice.getProximosEstrenos().subscribe
  ( (data: any) =>  this.proximosEstrenos = data.results);

    this.peliculasservice.getBestOfLastYear().subscribe
  ( (data: any ) => this.bests = data.results);
  }
}
