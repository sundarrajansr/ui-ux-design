import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  jsonData = {
    level1Prop1: 'Level 1 Property 1',
    level1Prop2: {
      level2Prop1: 'Level 2 Property 1',
      level2Prop2: {
        level3Prop1: 'Level 3 Property 1',
        level3Prop2: 'Level 3 Property 2',
      },
    },
  };

  groceryData = [
    {
      fruit: {
        orange: {
          type: 'citrus',
          color: 'orange',
        },
        apple: {
          type: 'cream',
          color: 'red',
        },
      },
    },
    {
      vegetable: {
        tomato: {
          type: 'juicy',
          color: 'red',
          origin: 'India',
        },
      },
    },
  ];
}
