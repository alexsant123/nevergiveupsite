import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'sobre-nos',
    loadComponent: () =>
      import('./pages/sobre-nos/sobre-nos.component')
        .then(c => c.SobreNosComponent)
  },



  {
    path: 'metodologia',
    loadComponent: () =>
      import('./pages/metodologia/metodologia.component')
        .then(c => c.MetodologiaComponent)
  }

];
