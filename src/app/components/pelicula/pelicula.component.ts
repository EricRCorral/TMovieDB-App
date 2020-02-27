import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})

export class PeliculaComponent {

  pelicula: any;

  peliculaId: number;

  constructor(public peliculasservice: PeliculasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params.subscribe( resp => this.peliculaId = resp.id);

                this.peliculasservice.getPelicula(this.peliculaId).subscribe(
                 (data: any) => {this.pelicula = data; }
    );
   }
   regresar() {

     if (window.location.href === `https://ericrcorral.github.io/TMovieDB-App/peli/${this.peliculaId}`) {
       window.history.back();
     } else {
       this.router.navigate(['home']);
     }
   }
}
