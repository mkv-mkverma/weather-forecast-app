import { Forecast } from '../features/weather/models/weather.model';

export function transformData(data: any): Forecast[] {
  return data.list.map((item: any) => ({
    date: item.dt_txt,
    temp: Math.round(item.main.temp),
    wind: item.wind.speed,
    description: item.weather[0].description,
    icon: item.weather[0].icon,
  }));
}
