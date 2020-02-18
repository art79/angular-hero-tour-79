/*
ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  {path: 'heroes', component: HeroesComponent} //Since AppRoutingModule already imports HeroesComponent, you can use it in the routes array:
]
/*
A typical Angular Route has two properties:
  path: a string that matches the URL in the browser address bar.
  component: the component that the router should create when navigating to this route.
This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like localhost:4200/heroes.
*/

/*RouterModule.forRoot()
The @NgModule metadata initializes the router and starts it listening for browser location changes.
The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():

The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

Next, AppRoutingModule exports RouterModule so it will be available throughout the app.
*/

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
