import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CommentsComponent } from './app/components/comments/comments.component';

bootstrapApplication(CommentsComponent, appConfig).catch((err) =>
  console.error(err),
);
