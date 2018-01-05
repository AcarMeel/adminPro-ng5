import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { SharedService } from './services/shared.service';
// import { SidebarService } from './services/sidebar.service';

import { APP_ROUTES } from './app.routes';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { SettingsService } from './services/settings.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
    // SharedService,
    // SidebarService
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
