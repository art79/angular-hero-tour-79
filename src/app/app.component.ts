import { Component } from '@angular/core'; // Import Angular's Decorator

// A component controls a patch of screen called a view
@Component({
  selector: 'heroes-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
