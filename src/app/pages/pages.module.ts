import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import {PAGES_ROUTES} from './pages.routes';
import { FormsModule } from '@angular/forms';
import { BoosterComponent } from '../components/booster/booster.component';
import {GraphDonutComponent} from '../components/graph-donut/graph-donut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        BoosterComponent,
        GraphDonutComponent,
        AccountSettingsComponent,
        PromisesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        BoosterComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }
