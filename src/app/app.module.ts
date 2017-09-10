import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { SidebarModule } from './views/admin-view/sidebar/sidebar.module';


const ROUTES: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    SidebarModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



