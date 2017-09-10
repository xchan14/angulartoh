import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HeroService } from './hero.service';
import { HeroDetailComponent } from './details/hero-detail.component';


const ROUTES: Routes = [
    //{ path: '', redirectTo: 'heroes/dashboard', pathMatch: 'full' },
    { path: 'heroes/detail/:id', component: HeroDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        FormsModule
    ],
    exports: [RouterModule],
    declarations: [
        HeroDetailComponent
    ],
    providers: [HeroService]
})
export class HeroesModule {
}
