import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../entity/Stats';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  basePath: String = 'http://localhost:8081/api/stats/'

  constructor(private apiService: ApiService) { }

  getYearlyStats(year: number): Observable<Stats[]> {
    return this.apiService.get(this.basePath + 'COTTAGE/yearly/' + year);
  }

  getMonthlyStats(year: number, month: number): Observable<Stats[]> {
    return this.apiService.get(this.basePath + 'monthly/' + year);
  } 

  getArbitrarilyStats(year: number, month: number): Observable<Stats[]> {
    return this.apiService.get(this.basePath + 'monthly/' + year);
  }

  getYears(): Observable<number[]> {
    return this.apiService.get(this.basePath + "years");
  }

}
