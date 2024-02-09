import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public static url : string = "https://car-selling-ws-prod-production-1011.up.railway.app/"
  constructor() { }
}
