import { Component } from '@angular/core';

@Component({
  selector: 'app-kids',
  standalone: true,
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css',
})

export class KidsComponent {

  ativo: number | null = null;

  toggle(index: number) {
    this.ativo = this.ativo === index ? null : index;
  }

}
