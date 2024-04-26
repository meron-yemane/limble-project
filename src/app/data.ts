import { Comment, User } from './types';

export const userData: User[] = [
  { userID: 1, name: 'Kevin' },
  { userID: 2, name: 'Jeff' },
  { userID: 3, name: 'Bryan' },
  { userID: 4, name: 'Gabbey' },
  { userID: 4, name: 'Landon' },
  { userID: 4, name: 'Michael' },
  { userID: 4, name: 'Benjamin' },
];

// TODO: refactor such that commentData only returns userID
export const commentData: Comment[] = [
  {
    userName: 'Jeff',
    id: 1,
    userID: 2,
    date: new Date(),
    textInput: 'Had to delay due to an audit',
  },
  {
    userName: 'Bryan',
    id: 2,
    userID: 3,
    date: new Date(),
    textInput: 'Audit completed, progress resumed',
  },
];
