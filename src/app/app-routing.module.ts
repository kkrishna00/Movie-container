import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMarkPageComponent } from './MyComponents/book-mark-page/book-mark-page.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { MovieListPageComponent } from './MyComponents/movie-list-page/movie-list-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'movieListPage',
    component: MovieListPageComponent,
  },
  {
    path: 'Bookmark',
    component: BookMarkPageComponent,
  },
  { path: '', redirectTo: 'movie-list-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
