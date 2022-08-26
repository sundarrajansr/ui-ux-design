import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'light-factory-app';
  message = 'hello world';
  clicked(){
    this.message = 'light clicked';
  }
}
