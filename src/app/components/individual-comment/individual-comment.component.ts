import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapChat } from '@ng-icons/bootstrap-icons';
import { Comment } from '../../types';

@Component({
  selector: 'app-individual-comment',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ bootstrapChat })],
  templateUrl: './individual-comment.component.html',
  styleUrl: './individual-comment.component.css',
})
export class IndividualCommentComponent {
  @Input({
    required: true,
  })
  comment!: Comment;

  @Input() isLastComment!: boolean;
}
