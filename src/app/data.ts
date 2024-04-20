import { Comment, User } from './types';

export const userData: User[] = [
  { userID: 1, name: 'Kevin' },
  { userID: 2, name: 'Jeff' },
  { userID: 3, name: 'Bryan' },
  { userID: 4, name: 'Gabbey' },
];

// TODO: refactor such that commentData only returns userID
export const commentData: Comment[] = [
  {
    userName: 'Jeff',
    id: 1,
    userID: 2,
    date: '2/1/2024',
    text: 'Had to delay due to an audit',
    time: '1:30PM',
  },
  {
    userName: 'Bryan',
    id: 2,
    userID: 3,
    date: '2/3/2024',
    text: 'Audit completed, progress resumed',
    time: '4:30PM',
  },
];
