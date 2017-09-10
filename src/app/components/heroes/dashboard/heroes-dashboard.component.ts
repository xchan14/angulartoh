import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'heroes-dashboard',
    templateUrl: 'heroes-dashboard.html'
})


export class HeroesDashboardComponent implements OnInit {

    heroes: Hero[] = [];
    title = "Top Heroes";

    constructor(private  heroService: HeroService) {}

    onSelect(hero: Hero): void {
        
    } 

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(h => this.heroes = h.slice(1, 5));
    }

}