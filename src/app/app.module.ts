//Here We START
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//All the other Pages
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { MovieListPageComponent } from './MyComponents/movie-list-page/movie-list-page.component';
import { BookMarkPageComponent } from './MyComponents/book-mark-page/book-mark-page.component';

//To fetch Data from OMDB API , We Use this Module
import { HttpClientModule } from '@angular/common/http';

//Nebular Theme Modules
import {
  NbSidebarModule,
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbAccordionModule,
  NbToastrModule,
} from '@nebular/theme';

//Nebular Icon Module
import { NbEvaIconsModule } from '@nebular/eva-icons';

//Form Module from Angular
import { FormsModule } from '@angular/forms';

//FeTch Movie LIST From OMDB
import { FetchMovieList } from './MyComponents/movie-list-page/FetchMovieList.component';

//Fetch Movie Details from OMDB API
import { FetchMovieDetails } from './MyComponents/movie-list-page/FetchMovieDetails.component';
//
import { config } from 'process';

//ALL THE MODULES USED
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieListPageComponent,
    BookMarkPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbAccordionModule,
    HttpClientModule,
    FormsModule,
    NbToastrModule.forRoot(),
  ],

  //Injectable  Objects
  providers: [FetchMovieList, FetchMovieDetails],
  bootstrap: [AppComponent],
})
export class AppModule {}
