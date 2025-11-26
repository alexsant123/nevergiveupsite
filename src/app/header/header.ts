import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('menuOpen:', this.menuOpen); // <-- debug: veja no console
  }
}
