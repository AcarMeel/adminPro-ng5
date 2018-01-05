import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  menu: any = [
    {
      title: 'Admin Pro',
      icon: 'mdi mdi-gauge',
      subItems: [
        { title: 'Dashboard', url: '/dashboard'},
        { title: 'ProgressBar', url: '/progress'},
        { title: 'Graphs', url: '/graph1'},
        // { title: 'Settings', url: '/account-settings'}
      ]
    }
  ];

  constructor() { }

}
