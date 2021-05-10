import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs';
@Injectable()
export class FetchMovieDetails {
  //Function To Fetch Movie Details From OMDB API USING ID AS IMDBID
  searchMovieDetail(imdbID: string) {
    console.log(imdbID);

    //URL OF THE WESITE
    const url = 'https://www.omdbapi.com/?apikey=1ddee4bf&i=' + imdbID;
    return this.http.get(url).pipe(
      map((response: Response) => {
        console.log(response);
        return response;
      })
    );
  }
  constructor(private http: HttpClient) {}
}
