import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url : String = "https://car-selling-ws-prod-production-1011.up.railway.app/cars";
  constructor() { }
}
