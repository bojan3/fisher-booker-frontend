import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePeriodDTO } from '../entity/DTO/DatePeriodDTO';
import { ReservationType } from '../entity/DTO/ReservationType';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(private apiService: ApiService) { }

  getReservationDates(type: ReservationType, realEstateId: number): Observable<DatePeriodDTO[]> {
    return this.apiService.get('http://localhost:8081/api/reservation/dates/' + type + '/' + realEstateId);
  }

  getSuperDealDates(type: ReservationType, realEstateId: number): Observable<DatePeriodDTO[]> {
    return this.apiService.get('http://localhost:8081/api/superDeal/dates/' + type + '/' + realEstateId);
  }
}
