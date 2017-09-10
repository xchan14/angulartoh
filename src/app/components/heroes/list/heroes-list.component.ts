import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'heroes-list',
  templateUrl: 'heroes-list.html',
  styleUrls: ['heroes-list.css']
})

export class HeroesListComponent implements OnInit   {

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(h => this.heroes = h);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onRefreshList(): void {
    this.heroes = [];
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

