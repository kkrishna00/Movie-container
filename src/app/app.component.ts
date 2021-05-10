import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //MENU FROM SIDEBAR
  MenuItems: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: 'home',
      home: true,
    },
    {
      title: 'MoviesList',
      icon: 'film-outline',
      link: '/movieListPage',
    },
    {
      title: 'BookMark',
      icon: 'star',
      link: '/Bookmark',
    },
  ];
  constructor(private readonly sidebarService: NbSidebarService) {}

  //To toggle The SideBar Menu WE Use This Function
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
  title = 'INTERNSHIP-PROJECT';
}
