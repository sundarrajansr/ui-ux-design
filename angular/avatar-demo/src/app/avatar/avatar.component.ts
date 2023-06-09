import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input() data: string | undefined;

  getInitials(): string {
    if (!this.data) {
      return '';
    }
    const words = this.data.split(' ');
  
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
  
    const firstInitial = words[0].charAt(0);
    const lastInitial = words[words.length - 1].charAt(0);
  
    return (firstInitial + lastInitial).toUpperCase();
  }

  getRandomColor():string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
