import { Component } from '@angular/core';
import { CommentsComponent } from './components/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css',
})
export class AppComponent {}
