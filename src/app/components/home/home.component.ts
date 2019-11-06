import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  proximosEstrenos: any[] = [];
  populares: any[] = [];
  popularesInfantiles: any[] = [];

  constructor(public peliculasservice: PeliculasService) {

    this.peliculasservice.getPopulares().subscribe
   ( (data: any) =>  {this.populares = data.results; });
    this.peliculasservice.getProximosEstrenos().subscribe
  ( (data: any) =>  this.proximosEstrenos = data.results );

    this.peliculasservice.getPopularesInfantiles().subscribe
  ( (data: any ) => this.popularesInfantiles = data.results );
   }
}
