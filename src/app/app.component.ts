import { Component } from '@angular/core';
import { SumaComponent } from './suma/suma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SumaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suma-app';
}
