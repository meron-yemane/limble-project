import {
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentService } from '../../services/comment/comment.service';
import { Comment, User } from '../../types';
import { TagUserModalService } from '../../services/tag-user-modal/tag-user-modal.service';
import { TagUserModalComponent } from '../tag-user-modal/tag-user-modal.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [ReactiveFormsModule, TagUserModalComponent],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  @ViewChild('commentTxt') commentTxt!: ElementRef;
  @ViewChildren('tagOption') tagOptions!: QueryList<any>;
  commentService = inject(CommentService);
  tagUserModalService = inject(TagUserModalService);
  userService = inject(UserService);
  commentForm = new FormGroup({
    body: new FormControl('', Validators.required),
  });
  users: User[] = [];

  constructor() {
    this.userService.getUserData().then((userData) => {
      this.users = userData;
    });
  }

  addTaggedUserToComment(user: User) {
    const currentCommentBody = this.commentForm.value.body;
    const updatedCommentBody = `${currentCommentBody}${user.name}`;
    this.commentForm.setValue({
      body: updatedCommentBody,
    });
    this.tagUserModalService.close();
    this.commentTxt.nativeElement.focus();
  }

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
    // we need to call setTimeout here to append the callback function to the end of the event queue to ensure textarea dom element adds '@'
    setTimeout(() => {
      if ($event.key === '@') {
        this.tagUserModalService.open('modal1');
        this.tagOptions.toArray()[0].nativeElement.focus();
      }
    });
  }

  onKeydown($event: KeyboardEvent, index: number, user: User) {
    // we need to call setTimeout here to append the callback function to the end of the event queue to ensure 'Enter' keydown event does not jump to next line in textarea
    setTimeout(() => {
      if ($event.key === 'ArrowDown') {
        this.focusElement(index + 1);
      } else if ($event.key === 'ArrowUp') {
        this.focusElement(index - 1);
      } else if ($event.key === 'Enter') {
        this.addTaggedUserToComment(user);
      }
    });
  }

  focusElement(index: number) {
    if (index >= 0 && index < this.users.length) {
      this.tagOptions.toArray()[index].nativeElement.focus();
    }
  }
}
