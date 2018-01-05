import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { element } from 'protractor';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  changeThemeColor(theme: string, el: any) {
    this.setWorkingTheme(el);
    const path  = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', path);
  }

  setWorkingTheme(el: any) {
   const selectors: any = document.getElementsByClassName('selector');
   for (const ref of selectors) {
    ref.classList.remove('working');
   }
   el.classList.add('working');
  }

}
