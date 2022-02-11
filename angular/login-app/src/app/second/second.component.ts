import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/users.service';
import {User} from './../service/User';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  name: string;
  users: User[];

  constructor(private _userService: UserService) { 
    this.name = 'Rekha';
    this.users = this._userService.getUserData();
  }

  ngOnInit(): void {
  }


}
