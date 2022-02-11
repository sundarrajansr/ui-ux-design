import { Injectable } from '@angular/core';
import {User} from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userdata: User[];

  constructor() {
    this.userdata = [
      { name: 'julie', age: 33, online: true },
      { name: 'vanitha', age: 43, online: true },
      { name: 'suresh thatha', age: 33, online: false },
    ];
  }

  getUserData(): User[]{
    return this.userdata;
  }

}