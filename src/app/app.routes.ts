import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full',
      },
      {
        path: 'weather',
        loadChildren: () =>
          import('./features/weather/weather.routes').then(
            (m) => m.weatherRoutes
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];
