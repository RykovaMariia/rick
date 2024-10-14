import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'management', pathMatch: 'full' },
  {
    path: 'management',
    loadComponent: () =>
      import('@features/management/pages/management/management.component').then((m) => m.ManagementComponent),
    children: [
      {
        path: 'contr-card',
        loadComponent: () =>
          import('@features/management/pages/contr-card/contr-card.component').then((m) => m.ContrCardComponent),
      },
    ],
  },
];
