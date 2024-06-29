import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = "https://restcountries.com/v3.1/all";
urlc = "https://countriesnow.space/api/v0.1/countries/currency";

  constructor(private http: HttpClient) { }
  getWeatherData(){
    return this.http.get(this.url);
  }
  getcurrencyData(){
    return this.http.get(this.urlc);
  }
  
}

