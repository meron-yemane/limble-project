import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from '../../types';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  commentService = inject(CommentService);
  commentForm = new FormGroup({
    body: new FormControl('', Validators.required),
  });

  handleCommentFormSubmit() {
    const comment: Comment = {
      id: this.commentService.generateId(),
      userID: this.commentService.generateId(),
      userName: 'Meron',
      date: new Date(),
      body: this.commentForm.value.body!,
    };
    this.commentService.postComment(comment);
  }

  displayTagUserInCommentPopup($event: KeyboardEvent) {
    if ($event.key === '@') {
    }
  }
}
