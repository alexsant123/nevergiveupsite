import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'sobre-nos',
    loadComponent: () =>
      import('./pages/sobre-nos/sobre-nos.component').then(c => c.SobreNosComponent)
  }
];
