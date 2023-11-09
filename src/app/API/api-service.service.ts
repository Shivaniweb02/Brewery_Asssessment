import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  getData()
  {
    const url="https://api.openbrewerydb.org/v1/breweries?by_name=cooper"
    return this.http.get(url);
  }

  getdatabyCity(city:string){
    const url="https://api.openbrewerydb.org/v1/breweries?by_city="+`${city}`;
    return this.http.get(url);
  
  }
  getdatabyName(name:string){
    const url="https://api.openbrewerydb.org/v1/breweries?by_name="+`${name}`;
    return this.http.get(url);
  
  }
  getdatabyType(type:string){
    const url="https://api.openbrewerydb.org/v1/breweries?by_type="+`${type}`;
    return this.http.get(url);
  
  }

}
