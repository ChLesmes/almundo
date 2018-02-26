import { hotel } from '../db-api/index';
import Debug from 'debug';

const debug = new Debug('almundo:midleware:hotel');

export const hotelsMiddleware = (req, res, next) => {
  req.hotels = hotel.findAll();
  next();
};

export const hotelMiddleware = (req, res, next) => {
  req.hotel = hotel.findById(req.params.id);
  next();
};

export const hotelFindNameMiddleware = (req, res, next) => {
  let hotels = hotel.findAll();
  let nameHotels = hotels.map(hotel => hotel.name);
  if (req.params.name) {
    let cadena = req.params.name;
    req.hotels = nameHotels.filter((name) => name.toUpperCase().includes(cadena.toUpperCase()));
  }else{
    req.hotels = nameHotels;
  }
  next();
};

export const hotelFilterMiddleware = (req, res, next) => {
  let hotels = hotel.findAll();
  let { name, stars } = req.body;
  if (name){
    hotels = hotels.filter(( hotel ) => hotel.name.toUpperCase().includes(name.toUpperCase()));
  }
  if(stars && stars.length > 0){
    let myHotels = [];
    stars.forEach((star)=>{
      myHotels.push(hotels.filter(( hotel ) => +hotel.stars === +star));
    });
    hotels = [];
    myHotels.forEach((starHotels) => {
      hotels = hotels.concat(starHotels);
    });

  }
  req.hotels = hotels;
  next();
};
