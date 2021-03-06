import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
})

export class GaleriaComponent {

  @Input()peliculas: string;
  @Input()titulo: string;

  constructor(private router: Router) { }

  verPelicula(pelicula: any) {
    this.router.navigate(['home', pelicula.id]);
  }

}
