import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '2fd2ff86ecdfceeb14d877621e40045b';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url);
  }
  // getProximosEstrenos() {

  //   const fecha = new Date();

  //   if (fecha.getDate() < 10 ) {
  //     const desdeISO = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-0${fecha.getDate()}`;
  //     const hastaISO = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-0${fecha.getDate()}`;

  //     const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeISO}&primary_release_date.lte=${hastaISO}&api_key=${this.apikey}&language=es`;

  //     return this.http.get(url);
  //   } else {
  //     const desdeISO = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
  //     const hastaISO = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-${fecha.getDate()}`;

  //     const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeISO}&primary_release_date.lte=${hastaISO}&api_key=${this.apikey}&language=es`;

  //     return this.http.get(url);
  //     }
  // }

  getProximosEstrenos( ) {

    let mesFin = (new Date().getMonth() + 1).toString();

    let mesInicio = (new Date().getMonth()).toString();

    if (mesInicio !== '10' || '11' || '12') {

      mesInicio = `0${mesInicio}`;

    }
    if (mesFin !== '10' || '11' || '12') {

      mesFin = `0${mesFin}`;

    }

    const inicio = `${new Date().getFullYear()}-${mesInicio}-${new Date().getDate()}`;

    const fin = `${new Date().getFullYear()}-${mesFin}-${new Date().getDate()}`;

    return this.http.get(`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}&api_key=${this.apikey}&language=es`);
  }

  getBestOfLastYear() {

    return this.http.get(`${this.urlMoviedb}/discover/movie?primary_release_year=${new Date().getFullYear() - 1}&sort_by=vote_count.desc&api_key=${this.apikey}&language=es`);

   }

  getPeliculas(termino: string) {
    const url = `${this.urlMoviedb}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }

  getPelicula(id: string) {
    const url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }
 }
