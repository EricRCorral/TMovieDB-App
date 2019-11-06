import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: PeliculaComponent },
    { path: 'buscar', component: BuscadorComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'peli/:id', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
