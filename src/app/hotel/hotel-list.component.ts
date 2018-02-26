import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel.model';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  providers: [HotelService]
})
export class HotelListComponent implements OnInit {
  constructor(private hotelService: HotelService) {}

  hotels: Hotel[];
  loading = true;

  ngOnInit() {
    this.hotelService
      .getHotels()
      .then((hotels: Hotel[]) => {
        this.hotels = hotels;
        this.loading = false;
      });
  }
}
