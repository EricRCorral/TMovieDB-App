import { Component } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(public peliculasservice: PeliculasService,
              private router: Router, ) {

               }

  buscarNav(termino: string) {
    if (termino.length === 0) {
      return;
    } else {
      this.router.navigate(['buscar', termino]);
    }
  }

  }

