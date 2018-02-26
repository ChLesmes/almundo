import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import * as urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HotelService {

  private hotelsUrl: string;

  constructor(private http: Http) {
    this.hotelsUrl = urljoin(environment.apiUrl, 'hotels');
  }

  getHotels(): Promise<void | Hotel[]> {
    console.log('getHotels');
    return this.http.get(this.hotelsUrl)
      .toPromise()
      .then(response => response.json() as Hotel[])
      .catch(HotelService.handleError);
  }
/*
  getHotel(id): Promise<void | Hotel> {
    const url = urljoin(this.hotelsUrl, id);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hotel)
      .catch(HotelService.handleError);
  }

  addHotel(hotel: Hotel) {
    const body = JSON.stringify(hotel);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.hotelsUrl, body, { headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addAnswer(answer: Answer) {
    const a = {
      description: answer.description,
      hotel: {
        _id: answer.hotel._id
      }
    };
    const body = JSON.stringify(a);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    console.log('answer', answer.hotel._id);
    const url = urljoin(this.hotelsUrl, answer.hotel._id.toString(), 'answers');
    return this.http.post(url, body, { headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  } */

  static handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }
}
