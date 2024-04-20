import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from '../../types';
import { TagUserModalService } from '../../services/tag-user-modal/tag-user-modal.service';
import { TagUserModalComponent } from '../tag-user-modal/tag-user-modal.component';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [ReactiveFormsModule, TagUserModalComponent],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  commentService = inject(CommentService);
  tagUserModalService = inject(TagUserModalService);
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
    this.commentForm.reset();
  }

  displayTagUserModal($event: KeyboardEvent) {
    if ($event.key === '@') {
      console.log('am I here');
      this.tagUserModalService.openModal('modal1');
    }
  }
}
