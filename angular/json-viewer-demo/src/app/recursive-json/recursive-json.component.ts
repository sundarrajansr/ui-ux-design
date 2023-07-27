import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recursive-json',
  templateUrl: './recursive-json.component.html',
  styleUrls: ['./recursive-json.component.css']
})
export class RecursiveJsonComponent {
  @Input() data: any;
  @Input() level: number = 0;

  constructor() {}

  getLevelClass(level: number) {
    switch (level) {
      case 1:
        return 'level1';
      case 2:
        return 'level2';
      case 3:
        return 'level3';
      default:
        return '';
    }
  }

  isObject(val: any) {
    return val !== null && typeof val === 'object';
  }
}
