import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentService } from '../../services/comment/comment.service';
import { Comment, User } from '../../types';
import { UserService } from '../../services/user/user.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  @ViewChild('inputField') private inputField!: ElementRef;
  public commentForm: FormGroup;
  userService = inject(UserService);
  commentService = inject(CommentService);
  isModalOpen: boolean = false;
  users: User[] = [];
  filteredUsers: User[] = [];
  constructor(private fb: FormBuilder) {
    this.userService.getUserData().then((userData) => {
      // we want to always have a copy of all users so we can reset
      this.users = userData;
      this.filteredUsers = this.users;
    });
    this.commentForm = this.fb.group({
      textInput: ['', Validators.required],
    });

    this.commentForm
      .get('textInput')
      ?.valueChanges.subscribe((newValue: string) => {
        const strToArray = newValue.split('@');
        if (strToArray.length > 1) {
          const textPrecedingLastMention = strToArray[strToArray.length - 2];
          // Keep modal closed if user has moved on from typing name
          if (
            textPrecedingLastMention[textPrecedingLastMention.length - 1] ===
              ' ' ||
            textPrecedingLastMention.length === 0
          ) {
            const lastMention = strToArray[strToArray.length - 1];
            this.getFilteredUsers(lastMention);
            this.isModalOpen = true;
          }
        } else {
          this.isModalOpen = false;
        }
      });
  }

  addTaggedUserToComment(user: User) {
    const currentCommentTextInput = this.commentForm.value.textInput;
    const updatedCommentTextInput = `${currentCommentTextInput}${user.name} `;
    this.commentForm.setValue({
      textInput: updatedCommentTextInput,
    });
    this.filteredUsers = this.users;
    // Focus on textarea after we add a user to the field
    this.inputField.nativeElement.focus();
    this.isModalOpen = false;
  }

  handleCommentFormSubmit() {
    const comment: Comment = {
      id: this.commentService.generateId(),
      userID: this.commentService.generateId(),
      userName: 'Meron',
      date: new Date(),
      textInput: this.commentForm.value.textInput!,
    };
    this.commentService.postComment(comment);
    this.commentForm.setValue({
      textInput: '',
    });
  }

  @HostListener('document:click', ['$event'])
  handleClick($event: MouseEvent) {
    const target = $event.target as HTMLElement;
    if (!target.parentElement?.classList.contains('modal-body')) {
      this.isModalOpen = false;
    }
  }

  getFilteredUsers(str: string) {
    this.filteredUsers = this.users.filter((user) => {
      return user.name.toLowerCase().startsWith(str.toLowerCase());
    });
  }
}
