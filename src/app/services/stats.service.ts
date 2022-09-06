import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePeriodDTO } from '../entity/DTO/DatePeriodDTO';
import { RealEstateType } from '../entity/RealEstateType';
import { Stats } from '../entity/Stats';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  basePath: String = 'http://localhost:8081/api/stats/'

  constructor(private apiService: ApiService, private http: HttpClient) { }

  getYearlyStats(year: number, type: RealEstateType): Observable<Stats[]> {
    return this.apiService.get(this.basePath + type.toString() + '/yearly/' + year);
  }

  getMonthlyStats(year: number, month: number, type: RealEstateType): Observable<Stats[]> {
    return this.apiService.get(this.basePath + type.toString() + '/monthly/' + year + '/' + month);
  }

  getArbitrarilyStats(datePeriod: DatePeriodDTO, type: RealEstateType): Observable<Stats[]> {
    let newPeriod = new DatePeriodDTO(datePeriod.startDate, datePeriod.endDate);
    if (newPeriod.startDate == null) {
      newPeriod.startDate = new Date();
    }
    if (newPeriod.endDate == null) {
      newPeriod.endDate = new Date();
    }
    return this.http.post<Stats[]>(this.basePath + type.toString() + '/arbitrarily', newPeriod);
  }

  getYears(type: RealEstateType): Observable<number[]> {
    return this.apiService.get(this.basePath + type.toString() + "/years");
  }

}
