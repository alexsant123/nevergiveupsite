 import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { MainComponent } from './main/main';
 import {MetodologiaComponent} from './pages/metodologia/metodologia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent,MetodologiaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}  // ✅ nome padrão e independente
