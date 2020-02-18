import { Component, OnInit, Input } from '@angular/core'; // The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent will bind to it
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; // 

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
  /*
  The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.

  The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.

  The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
   */
  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
  ) { }

  ngOnInit() {
    // In the ngOnInit() lifecycle hook call getHero() and define it as follows.
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}