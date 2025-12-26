import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'quem-somos',
    loadComponent: () =>
      import('./pages/quem-somos/quem-somos.component')
        .then(c => c.QuemSomosComponent)
  },

  {
    path: '',
    loadComponent: () =>
      import('./main/main.component').then(m => m.MainComponent)
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
  {
    path: 'kids',
    loadComponent: () =>
      import('./pages/kids/kids.component')
        .then(m => m.KidsComponent)
  },
  {
    path: 'corporativo',
    loadComponent: () =>
      import('./pages/corporativo/corporativo.component')
        .then(m => m.CorporativoComponent)
  },




];
