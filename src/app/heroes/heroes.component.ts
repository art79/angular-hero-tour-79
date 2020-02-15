import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }


  ngOnInit() {
  }

  onSelect(hero){
    console.log('clicked', hero.name);
    this.selectedHero = hero;
  }

}