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
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
  getProximosEstrenos() {

    const fecha = new Date();

    if (fecha.getDate() < 10 ) {
      const desdeISO = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-0${fecha.getDate()}`;
      const hastaISO = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-0${fecha.getDate()}`;

      const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeISO}&primary_release_date.lte=${hastaISO}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

      return this.http.jsonp(url, 'JSONP_CALLBACK');
    } else {
      const desdeISO = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
      const hastaISO = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-${fecha.getDate()}`;

      const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeISO}&primary_release_date.lte=${hastaISO}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

      return this.http.jsonp(url, 'JSONP_CALLBACK');
      }
  }

  getPopularesInfantiles() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  getPeliculas(termino: string) {
    const url = `${this.urlMoviedb}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  getPelicula(id: string) {
    const url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
 }
