import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from "../weather.service";


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() index: number;

  emptyCard:boolean = false;
  firstTime:boolean = true;
  isError:boolean = false;
  isSuccess:boolean = false;
  isEdit: boolean = false;
  subscription: Subscription;
  localData: any = {};

  cityName:string;
  weatherStatus:string;
  temperature:number;
  imageType:string;

  checkoutForm = this.formBuilder.group({
    cityName: ''
  });

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { 
    this.subscription = interval(30000).pipe(takeWhile(() => true)).subscribe(() => this.getWeatherRepeat());
  }

  ngOnInit(): void {
    if (localStorage.getItem(String(this.index)) != null) {
      console.log(JSON.parse(localStorage.getItem(String(this.index))));
      this.localData = JSON.parse(localStorage.getItem(String(this.index)));
      this.isSuccess = true;
      this.isError = false;
      this.firstTime = false;
    }
  }

  onClick(): void {
    this.emptyCard = true;
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit;
  }

  getWeatherRepeat(): void {
    if (this.isSuccess) {
      this.weatherService.getWeather(this.cityName)
      .subscribe(weather => this.processResult(weather));
    }
  }

  getWeather(): void {
    this.weatherService.getWeather(this.checkoutForm.value.cityName)
      .subscribe(weather => this.processResult(weather));
    this.checkoutForm.reset();
  }

  processResult(result) {
    if (result == "Error") {
      this.isError = true;
      this.firstTime = false;
      this.isSuccess = false;
      this.isEdit = false;
      this.localData = {};
      localStorage.removeItem(String(this.index));
    } else {
      console.log(result);
      this.isError = false;
      this.firstTime = false;
      this.isSuccess = true;
      this.cityName = result.name;
      this.weatherStatus = result.weather[0].main;
      this.temperature = Math.round(result.main.temp - 273);
      this.imageType =  "http://openweathermap.org/img/wn/" + 
      result.weather[0].icon + "@2x.png";
      this.localData = {
        cityName: result.name,
        weatherStatus: result.weather[0].main,
        temperature: Math.round(result.main.temp - 273),
        imageType:  "http://openweathermap.org/img/wn/" + 
      result.weather[0].icon + "@2x.png"
      }
      localStorage.setItem(String(this.index), JSON.stringify(this.localData));
    }
  }

}
