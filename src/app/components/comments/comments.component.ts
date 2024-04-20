import { Component } from '@angular/core';
import { IndividualCommentComponent } from '../individual-comment/individual-comment.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { Comment } from '../../types';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [IndividualCommentComponent, AddCommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  comments: Comment[] = [
    {
      name: 'Meron',
      date: '01/12/24',
      text: 'My first comment yeaaaaaaayyyyyyyy',
      time: '12:00AM',
    },
  ];
}
