import { Component, Input } from '@angular/core';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html'
})
export class HotelItemComponent {
  @Input() hotel: Hotel;
}
