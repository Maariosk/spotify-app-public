import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Operador map
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo' );
   }

   getQuery( query: string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBgjo5GsdMEqpzDW1yHlbIYrxhk5MttUrIFBLtXJfwJOAzQIg8BvNULp_qT9HET8EAj8_GpSU2MCxG5cTE'

    });

    return this.http.get(url, {headers});
   }

   getNewReleases(){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAlJNh18AWYf8hlEYgAdPAnWmIeqieei-UDmpB9VK6Bs301e_-WteAuhdSOm40bS__RBq7-S5bPUBaBflY'

    // });

     return this.getQuery('browse/new-releases?limit=20').pipe(map(data =>  data ['albums'].items));

    //  this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})


   }

   getArtista(termino: string){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAlJNh18AWYf8hlEYgAdPAnWmIeqieei-UDmpB9VK6Bs301e_-WteAuhdSOm40bS__RBq7-S5bPUBaBflY'

    // });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data =>  data ['artists'].items));
   }
}
