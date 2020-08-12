import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = "https://api.covid19india.org/state_district_wise.json";
  data:any;
  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get<any>(this.api_url);
    
  }
}
