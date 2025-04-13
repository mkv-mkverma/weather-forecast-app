import { Component, signal } from '@angular/core';
import { CitySelectorComponent } from '../../components/city-selector/city-selector.component';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { Forecast } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { ForecastCardComponent } from '../../components/forecast-card/forecast-card.component';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [CommonModule, CitySelectorComponent, ForecastCardComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss',
})
export class WeatherPageComponent {
  destroy$ = new Subject<void>();
  forecastData = signal<Forecast[]>([]);
  constructor(private weatherService: WeatherService) {}

  onChangeCity(city: string): void {
    const GBCITY = `${city},GB`;
    this.weatherService
      .getForecast(GBCITY)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const filtered = this.filterOnePerDay(data);
        this.forecastData.set(filtered);
      });
  }

  private filterOnePerDay(forecasts: Forecast[]): Forecast[] {
    const seen = new Set<string>();
    return forecasts.filter((forecast) => {
      const date = forecast.date.split(' ')[0];
      if (!seen.has(date) && forecast.date.includes('12:00:00')) {
        seen.add(date);
        return true;
      }
      return false;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
