import { Injectable } from '@angular/core';
// rely on Angular dependency injection to inject it into the HeroesComponent

// Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two places.
  // Inject in HeroService, which uses the service to send a message.
  // Inject in MessagesComponent, which displays that message, and also displays the ID when the user clicks a hero.

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

// Observable is one of the key classes in the RxJS library.
// In a later tutorial on HTTP, you'll learn that Angular's HttpClient methods return RxJS Observables. In this tutorial, you'll simulate getting data from the server with the RxJS of() function.
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

// Notice that the new service imports the Angular Injectable symbol and annotates the class with the @Injectable() decorator. This marks the class as one that participates in the dependency injection system. The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies. It doesn't have any dependencies yet, but it will soon.

// You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent by registering a provider. A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.

// To make sure that the HeroService can provide this service, register it with the injector, which is the object that is responsible for choosing and injecting the provider where the app requires it.

// By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata, that is providedIn: 'root' in the @Injectable() decorator.
@Injectable({
  providedIn: 'root',
})
// When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.

// The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
@Injectable() // Injectable decorator
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}