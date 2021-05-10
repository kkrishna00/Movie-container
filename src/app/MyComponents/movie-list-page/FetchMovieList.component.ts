import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs';
@Injectable()
export class FetchMovieList {
  //FUNCTION TO FETCH MOVIE DATA BY TITLE ON SEARCH
  searchMovieByTitle(title: string) {
    //URL OF THE WEBSITE FROM WHERE WE FETCH DATA
    const url =
      'http' + 's' + '://www.omdbapi.com/?s=' + title + '&apikey=1ddee4bf';
    return this.https.get(url).pipe(
      map((response: Response) => {
        console.log(url);
        console.log(response);
        return response;
      })
    );
  }
  constructor(private https: HttpClient) {}
}
