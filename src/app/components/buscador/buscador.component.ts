import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})

export class BuscadorComponent implements OnInit {

  peliculas = '';

  href = window.location.href ;

  noMatch = window.decodeURI(window.location.pathname.substr(8, ));

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
                            this.noMatch = window.decodeURI(window.location.pathname.substr(8, ));
             }); }
  }

  verPelicula(pelicula: any) {

    const peliculaId = pelicula.id;
    this.router.navigate(['peli', peliculaId]);
  }

  ngOnInit() {

  }
}
