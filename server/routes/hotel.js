import express from 'express';
import {
  hotelsMiddleware,
  hotelMiddleware,
  hotelFilterMiddleware,
  hotelFindNameMiddleware
} from '../middleware'
import { handleError } from '../utils';

const app = express.Router();

app.get('/', hotelsMiddleware, (req, res) =>{
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }

});

app.get('/names', hotelFindNameMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

app.get('/names/:name', hotelFindNameMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

app.get('/:id', hotelMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotel)
  }catch (error){
    handleError(error);
  }
});

app.post('/filter', hotelFilterMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

export default app;
