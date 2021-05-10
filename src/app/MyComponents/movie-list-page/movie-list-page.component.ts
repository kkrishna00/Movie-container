import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieList } from './FetchMovieList.component';
import { FetchMovieDetails } from './FetchMovieDetails.component';
@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css'],
})
export class MovieListPageComponent implements OnInit {
  //TITLE FOR THE MOVIE
  title: string;

  // TO STORE ALL THE MOVIES THAT MATCHES ON SEARCH
  MovieList: any;

  // TO STORE DETAILS OF THE MOVIE
  MovieDetails: any;

  constructor(
    private FetchDetail: FetchMovieDetails,
    private FetchMovie: FetchMovieList
  ) {}

  //SEARCH MOVIE BY THEIR TITLE
  searchMovie = (title: String) => {
    this.FetchMovie.searchMovieByTitle(this.title).subscribe((result) => {
      this.MovieList = result;
    });
    console.log(this.MovieList);
  };

  //RETURNS MOVIE DETAIL USING IMDBID
  searchAboutMovie = (imdbID: string) => {
    this.FetchDetail.searchMovieDetail(imdbID).subscribe((result) => {
      this.MovieDetails = result;
      console.log(this.MovieDetails);
    });
  };

  //BOOKMARK MOVIES SECTION
  bookMark: any[];

  Mark: any[];
  bookMarkMovie(movie: any) {
    console.log(movie);
    this.bookMark = JSON.parse(localStorage.getItem('movie'));
    this.Mark = JSON.parse(localStorage.getItem('movie'));
    console.log(this.bookMark);
    this.bookMark.push(movie);
    this.Mark.push(movie);
    console.log(this.bookMark);
    localStorage.setItem('movie', JSON.stringify(this.Mark));
    console.log(localStorage.getItem('movie'));
  }
  ngOnInit(): void {}
}
