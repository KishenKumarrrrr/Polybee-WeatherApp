import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url:string = "http://api.openweathermap.org/data/2.5/weather?q=";
  apiKey:string = "&appid=5f7d5f37dab97432a6357eeb701829a6"

  constructor(private http: HttpClient) { }

  getWeather(city:string) : Observable<any> {
    return this.http.get(this.url+city+this.apiKey)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) : Observable<any> {
    console.log(error);
    return of(error.error.message);
  }
}
