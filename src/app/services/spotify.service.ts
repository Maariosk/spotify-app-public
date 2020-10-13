import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo' );
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA0tBBcnMspSGj2oS-_sx_HAPlKH40yBZhHwpCQgFCvj7A7ejDnV8X4n6ASqNhebbwpDfbLcqsWkDJdgYE'

    });

     this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).subscribe(data => {
       console.log(data);
     });

   }
}
