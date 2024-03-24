import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookie-service-demo';

//add cookie named 'test' with value 'test' and expiry date after 7 days
  setCookie() {
    document.cookie = "test=test; expires=" + new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toUTCString();
  }

}
