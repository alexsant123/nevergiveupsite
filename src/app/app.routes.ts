import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'sobre-nos',
    loadComponent: () =>
      import('./pages/quem-somos/quem-somos.component')
        .then(c => c.QuemSomosComponent)
  },



  {
    path: 'metodologia',
    loadComponent: () =>
      import('./pages/metodologia/metodologia.component')
        .then(c => c.MetodologiaComponent)
  },

  {
    path: 'teacher-regis',
    loadComponent: () =>
      import('./pages/teacher-regis/teacher-regis.component')
        .then(m => m.TeacherRegisComponent)
  },
];
