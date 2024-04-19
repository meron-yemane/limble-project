import { Component } from '@angular/core';
import { IndividualCommentComponent } from '../individual-comment/individual-comment.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [IndividualCommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {}
