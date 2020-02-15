import { Component, OnInit, Input } from '@angular/core'; // The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent will bind to it

import { Hero } from '../hero'; // 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Add the @Input() hero property
  // The HeroDetailComponent template binds to the component's hero property which is of type Hero.
  // Add a hero property, preceded by the @Input() decorator.
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}