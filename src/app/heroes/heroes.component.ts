import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.

    // This asynchronous approach will work when the HeroService requests heroes from the server.    
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); 
    // .subscribe(function(heroes){this.heroes = heroes}) // equivalent js code
  }

  onSelect(hero){
    // console.log('clicked', hero.name);
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

}