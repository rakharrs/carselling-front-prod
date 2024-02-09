import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarStatusService {

  private url : string = "https://car-selling-ws-prod-production-1011.up.railway.app/carStatus";
  constructor(private http : HttpClient) { }
  findAll(token: string): Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }
}
