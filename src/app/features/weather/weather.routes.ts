import { Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

export const weatherRoutes: Routes = [
  {
    path: '',
    component: WeatherPageComponent,
  },
];
