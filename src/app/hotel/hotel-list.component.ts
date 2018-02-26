import { Component, Input } from '@angular/core';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})
export class HotelListComponent{
  @Input() hotels: Hotel[];
}
