import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}  // <-- esse nome precisa ser igual ao do main.ts
