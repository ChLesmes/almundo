import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel.model';
//import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  //providers: [HotelService]
})
export class HotelListComponent implements OnInit {
  //constructor(private hotelService: HotelService) {}

  hotels: Hotel[];
  loading = true;

  ngOnInit() {

    let hotel: Hotel = new Hotel(
        "Hotel Stefanos",
         "3",
         "994.18",
         "4900059_30_b.jpg",
        [
          "safety-box",
          "nightclub",
          "deep-soaking-bathtub",
          "beach",
          "business-center"
        ],
        "249942"
      );
    this.hotels = new Array(10).fill(hotel);
    this.loading = false;


    /*this.hotelService
      .getHotels()
      .then((hotels: Hotel[]) => {
        this.hotels = hotels;
        this.loading = false;
      });*/
  }
}
