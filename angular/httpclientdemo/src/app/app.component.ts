import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'httpclientdemo';
apiResponse: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<TestComponent>('https://run.mocky.io/v3/e7605c2e-04d6-4edd-83a8-4b5baf0f682d').subscribe(data => {
      console.log(data);
      this.apiResponse = JSON.stringify(data);
    });
  }
}