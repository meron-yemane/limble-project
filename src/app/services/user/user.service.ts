import { Injectable } from '@angular/core';
import { User, userData } from '../../user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: User[] = userData;
  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
