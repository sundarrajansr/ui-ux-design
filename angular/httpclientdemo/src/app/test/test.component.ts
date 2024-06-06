import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  test: string;
  
  constructor() {
    this.test = ''; // Add initializer to 'test' property
  }

  ngOnInit() {
    this.test = '';
  }
}
