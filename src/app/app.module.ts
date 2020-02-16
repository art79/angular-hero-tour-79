// Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your app by bootstrapping the root NgModule.
import { BrowserModule } from '@angular/platform-browser'; // import NgModules from Angular libraries using JavaScript import statements
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Added to get input to work

// import { AppComponent } from './app.component';
import { AppComponent } from './app.component';


import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

// https://angular.io/guide/architecture-modules
@NgModule({
  // declarations: The components, directives, and pipes that belong to this NgModule.
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  // exports: The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [],
  // imports: Other modules whose exported classes are needed by component templates declared in this NgModule.
  imports: [
    BrowserModule, // application module needs material from within BrowserModule. To access that material, add it to the @NgModule metadata imports
    FormsModule
  ],
  // providers: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)
  providers: [HeroService],
  // bootstrap: The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
