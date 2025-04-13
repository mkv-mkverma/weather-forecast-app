import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEATHER_CONFIG } from '../../../core/constants/api';
import { map } from 'rxjs';
import { transformData } from '../../../utils/forecast.utils';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getForecast(city: string) {
    return this.http
      .get(
        `${this.forecastURL()}?q=${city}&appid=${
          WEATHER_CONFIG.key
        }&units=metric`
      )
      .pipe(map((response: any) => transformData(response)));
  }

  forecastURL() {
    const url =
      WEATHER_CONFIG.protocol +
      WEATHER_CONFIG.endpoint +
      WEATHER_CONFIG.url.forecast;

    return url;
  }
}
