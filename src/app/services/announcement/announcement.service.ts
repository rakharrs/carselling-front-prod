import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private url : string = "https://car-selling-ws-prod-production-1011.up.railway.app/announcement";
  constructor(private http : HttpClient) { }

  public findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }
}
