import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})

export class PeliculaComponent {

  pelicula: any;

  peliculaId = window.location.pathname.substr(6, );

  constructor(public peliculasservice: PeliculasService,
              private router: Router) {
    this.peliculasservice.getPelicula(this.peliculaId).subscribe(
      (data: any) => {this.pelicula = data; }
    );
   }
   regresar() {

     if (window.location.pathname === `/peli/${this.peliculaId}`) {
       window.history.back();
     } else {
       this.router.navigate(['home']);
     }
   }
}
