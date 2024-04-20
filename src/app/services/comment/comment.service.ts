import { Injectable } from '@angular/core';
import { Comment } from '../../types';
import { commentData } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentData: Comment[] = commentData;
  constructor() {}

  getCommentData(): Promise<Comment[]> {
    return new Promise((resolve) => {
      resolve(this.commentData);
    });
  }

  postComment(comment: Comment) {
    this.commentData.push(comment);
  }

  generateId() {
    const minCeiled = Math.ceil(10);
    const maxFloored = Math.floor(10000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }
}
