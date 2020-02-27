import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})

export class BuscadorComponent {

  peliculas = '';

  href = window.location.href;

  noMatch = this.route.params.subscribe( resp => this.noMatch = resp.termino );

  constructor(public peliculasservice: PeliculasService,
              private router: Router,
              private route: ActivatedRoute) {

                this.route.params.subscribe( parametros => {
                    return this.buscar(parametros.termino) ;
                  });
  }

  buscar(termino = '') {if (termino.length === 0) {
    return;
  } else {
    return this.peliculasservice.getPeliculas(termino).subscribe(
           (data: any) => { this.router.navigate(['buscar', termino]);
                            termino = data.results;
                            this.peliculas = termino;
                            this.route.params.subscribe( resp => this.noMatch = resp.termino );
             }); }
  }

  verPelicula(pelicula: any) {

    const peliculaId = pelicula.id;
    this.router.navigate(['peli', peliculaId]);
  }
}
