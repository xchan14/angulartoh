import { Component } from '@angular/core';
import { HeroService } from './components/heroes/hero.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
}