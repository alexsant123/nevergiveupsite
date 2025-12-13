 import {RouterLink} from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MainComponent {}
