import { Injectable } from '@angular/core';
import {User} from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userdata: User[];

  constructor() {
    this.userdata = [
      { name: 'sundar', age: 32, online: false },
      { name: 'rekha', age: 30, online: true },
      { name: 'dhanya', age: 5, online: true },
    ];
  }

  getUserData(): User[]{
    return this.userdata;
  }

}