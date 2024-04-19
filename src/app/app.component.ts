import { Component } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommentsComponent],
  template: `<app-comments />`,
  styleUrl: './app.component.css',
})
export class AppComponent {}
