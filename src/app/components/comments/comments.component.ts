import { Component, inject } from '@angular/core';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { Comment } from '../../types';
import { CommentService } from '../../services/comment/comment.service';
import { DatePipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapChat } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [AddCommentComponent, DatePipe, NgIconComponent],
  viewProviders: [provideIcons({ bootstrapChat })],
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
