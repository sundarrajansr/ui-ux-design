import { Component, OnInit } from '@angular/core';
import {User} from './../service/User';
import {UserService} from '../service/users.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  users: User[];

  constructor(private _userService: UserService) { 
    this.users = this._userService.getUserData();
  }

  ngOnInit(): void {
  }

}
