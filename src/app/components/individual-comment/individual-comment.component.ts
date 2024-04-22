import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapChat } from '@ng-icons/bootstrap-icons';
import { Comment } from '../../types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-individual-comment',
  standalone: true,
  // this is a purely presentational component, so we can improve performance by instructing Angular to only run change detection when new inputs are received
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, DatePipe],
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
