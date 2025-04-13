import { Component, EventEmitter, Output, output } from '@angular/core';
import { CITIES } from '../../../../core/constants/city-list';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss',
})
export class CitySelectorComponent {
  cities: string[] = CITIES;
  @Output() selectedCity = new EventEmitter<string>();

  selectCity(event: Event): void {
    const city = (event.target as HTMLSelectElement).value;
    this.selectedCity.emit(city);
  }
}
