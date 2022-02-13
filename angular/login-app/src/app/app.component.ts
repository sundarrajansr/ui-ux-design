import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'login-app';

  constructor(private _router: Router, private _cookieSvc: CookieService) { 
    const signInValue = this._cookieSvc.get('user-id');
    if (signInValue) {
      this._router.navigate(['/first']);
    } else {
      this._router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }


  handleHomePage():void{

  }

}
