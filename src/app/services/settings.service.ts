import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  settings: ISettings = {
    themeUrl: 'assets/css/colors/red-dark.css',
    theme: 'red-dark'
  };
  settingsKeyName: string = 'settingsKey';

  constructor(@Inject(DOCUMENT) private _document) { this.loadSettings(); }

  saveSettings() {
    localStorage.setItem(this.settingsKeyName, JSON.stringify(this.settings));
  }
  loadSettings() {
    if (localStorage.getItem(this.settingsKeyName)) {
      this.settings = JSON.parse(localStorage.getItem(this.settingsKeyName));
      this.applyTheme(this.settings.theme);
      console.log('Settings have been appied');
    } else {
      this.applyTheme(this.settings.theme);
      console.log('Settings by default have been loaded');
    }
  }
  applyTheme(theme: string) {
    const path  = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', path);
    this.settings.theme = theme;
    this.settings.themeUrl = path;
    this.saveSettings();
  }
}

interface ISettings {
  themeUrl: string;
  theme: string;
}
