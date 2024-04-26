export interface User {
  userID: number;
  name: string;
}

export interface Comment {
  id: number;
  userID: number;
  userName: string;
  date: Date;
  textInput: string;
}
