import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {

    const url = 'http://image.tmdb.org/t/p/w400';

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
  } if (pelicula.poster_path) {
    return url + pelicula.poster_path;
  } else {
      return 'assets/images/no-image.png';
      }
    }
  }
