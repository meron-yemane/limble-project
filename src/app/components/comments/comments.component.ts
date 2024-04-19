import { Component } from '@angular/core';
import { IndividualCommentComponent } from '../individual-comment/individual-comment.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [IndividualCommentComponent, AddCommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {}
