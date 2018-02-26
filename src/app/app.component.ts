import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel/hotel.model';
import { HotelService } from './hotel/hotel.service';
import { Filter } from './filter/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HotelService]
})
export class AppComponent implements OnInit {
  constructor(private hotelService: HotelService) {}

  hotels: Hotel[];
  loading = true;
  title = 'app';
  filter: Filter = new Filter('',[]);

  ngOnInit() {
    this.hotelService
      .getHotels()
      .then((hotels: Hotel[]) => {
        this.hotels = hotels;
        this.loading = false;
      });
  }

  updateFilter(filter) {
    this.loading = true;
    this.filter = filter;
    this.hotelService
      .getFilterHotels(this.filter)
      .then((hotels: Hotel[]) => {
        this.hotels = hotels;
        this.loading = false;
      });
  }
}
