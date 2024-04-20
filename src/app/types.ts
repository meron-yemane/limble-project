export interface User {
  userID: number;
  name: string;
}

export interface Comment {
  id: number;
  userID: number;
  userName: string;
  date: string;
  text: string;
  time: string;
}
