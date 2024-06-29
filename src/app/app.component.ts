import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Know-Your-World';
  getweatherData:any;
  getcurrencyData:any;
  selectedCountry:any;
  selectedCountry2:any;
  constructor(private weatherData:WeatherService, private currencyData:WeatherService){
    weatherData.getWeatherData().subscribe((data1) =>{
      console.warn("data",data1);

      this.getweatherData = data1;
    });
    currencyData.getcurrencyData().subscribe((data2) =>{
      console.warn("cdata",data2);

      this.getcurrencyData = data2;
    });
  }
  

  onCountryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    for (let i = 0; i < this.getweatherData.length; i++) {
      const country = this.getweatherData[i];
      if (country.name.common === selectedValue) {
        this.selectedCountry = country; 
        break;
      }
    }

    for (let i = 0; i < this.getcurrencyData.data.length; i++) {
      const country = this.getcurrencyData.data[i];
      if (country.name === selectedValue) {
        this.selectedCountry2 = country; 
        break;
      }
    }
  }
}

