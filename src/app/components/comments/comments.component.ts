import { Component, inject } from '@angular/core';
import { IndividualCommentComponent } from '../individual-comment/individual-comment.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { Comment } from '../../types';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [IndividualCommentComponent, AddCommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  commentService = inject(CommentService);
  comments: Comment[] = [];

  constructor() {
    this.commentService.getCommentData().then((commentData) => {
      this.comments = commentData;
    });
  }
}
