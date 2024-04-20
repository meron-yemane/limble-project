import { Injectable } from '@angular/core';
import { userData } from '../../data';
import { User } from '../../types';

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
