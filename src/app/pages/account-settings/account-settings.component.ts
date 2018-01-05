import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _settings: SettingsService) { }

  ngOnInit() {
    this.setWorkingTheme();
  }

  changeThemeColor(theme: string) {
    this._settings.applyTheme(theme);
    this.setWorkingTheme();
  }
  setWorkingTheme() {
    // Applies the class 'working' to the selected element
   const selectors: any = document.getElementsByClassName('selector');
   let currentTheme = this._settings.settings.theme;
   for (const ref of selectors) {
    if (ref.getAttribute('data-theme') === currentTheme) {
      ref.classList.add('working');
    } else {
      ref.classList.remove('working');
    }
   }
  }
}
