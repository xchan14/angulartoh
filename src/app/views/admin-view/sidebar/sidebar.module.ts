import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';

import { MenuItemService } from './menu-item.service';
import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from '../../../components/heroes/list/heroes-list.component';
import { HeroesDashboardComponent } from '../../../components/heroes/dashboard/heroes-dashboard.component';

const ROUTES: Routes = [
    //{ path: '', redirectTo: 'heroes/dashboard', pathMatch: 'full' },
    { path: 'heroes/dashboard', component: HeroesDashboardComponent },
    { path: 'heroes', component: HeroesListComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES), CommonModule ],
    exports: [SidebarComponent],
    declarations: [
        SidebarComponent,
        HeroesDashboardComponent,
        HeroesListComponent
    ],
    providers: [MenuItemService]   
})
export class SidebarModule {

}