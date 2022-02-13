import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
  cookieValue :String;

  constructor(private _cookieSvc: CookieService) { 
   this.cookieValue = '';
  }

  ngOnInit(): void {
  }

  setCookie(): void{
    this._cookieSvc.set('user-id','rekha');
    this.cookieValue = 'rekha';
  }

  clearCookie(): void{
    this._cookieSvc.delete('user-id', '/', 'localhost', false, 'Lax');
    this.cookieValue=this._cookieSvc.get('user-id');
  }


}
