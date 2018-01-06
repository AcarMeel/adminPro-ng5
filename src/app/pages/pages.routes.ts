import {Routes, RouterModule} from '@angular/router';
import {ProgressComponent} from './progress/progress.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {PagesComponent} from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {PromisesComponent} from './promises/promises.component';
/**
 * Created by AcarMeel on 3/1/2018.
 */

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graph1', component: Graph1Component },
      { path: 'promises', component: PromisesComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ] }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
