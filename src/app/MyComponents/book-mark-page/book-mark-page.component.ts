import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-mark-page',
  templateUrl: './book-mark-page.component.html',
  styleUrls: ['./book-mark-page.component.css'],
})
export class BookMarkPageComponent implements OnInit {
  //ARRAY TO STORE BOOKMARKED MOVIES
  // bookMarkedMovie: any = [];

  //STORED IN LOCAL-STORAGE
  bookMarkedMovie = JSON.parse(localStorage.getItem('movie'));
  constructor() {
    console.log(this.bookMarkedMovie);
  }

  //FUNCTION TO DELETE BOOKMARKED MOVIE
  deleteThisMovie(movie: any) {
    var index = this.bookMarkedMovie.indexOf(movie);
    console.log(index);
    this.bookMarkedMovie.splice(index, 1);
    localStorage.setItem('movie', JSON.stringify(this.bookMarkedMovie));
  }

  //END
  ngOnInit(): void {}
}
