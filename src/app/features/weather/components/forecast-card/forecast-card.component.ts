import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WEATHER_CONFIG } from '../../../../core/constants/api';
import { Forecast } from '../../models/weather.model';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.scss',
})
export class ForecastCardComponent {
  @Input() data!: Forecast;

  getIconUrl(iconCode: string): string {
    return WEATHER_CONFIG.iconUrl(iconCode);
  }
}
