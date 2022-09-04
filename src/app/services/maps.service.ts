import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  apikey = 'a7b572e8-718a-4325-9c8b-676375397e9e';

  constructor(private http: HttpClient) { }

  getCoord(address: string) {
    return this.http.get('https://geocode-maps.yandex.ru/1.x/?apikey=' + this.apikey + '&format=json&geocode=' + address + '&lang=en-US');
  }
}
