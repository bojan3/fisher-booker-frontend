import { Component, Input, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { AvailabilityPeriod } from 'src/app/entity/AvailabilityPeriod';
import { DatePeriodDTO } from 'src/app/entity/DTO/DatePeriodDTO';
import { SuperDeal } from 'src/app/entity/SuperDeal';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input()
  id: number = 0;
  @Input()
  superDeals: SuperDeal[] = [];
  @Input()
  availabilityPeriod!: AvailabilityPeriod;

  selectedDate!: any;
  dealDates: Date[] = [];
  reservedDates: Date[] = [];

  constructor(private cottageService: CottageService) { }

  ngOnInit(): void {
    this.cottageService.getDates(this.id).subscribe((dates) => {
      this.reservedDates = this.getReservedDates(dates);
    })
    this.dealDates = this.getdealDates();
  }

  getReservedDates(datePeriods: DatePeriodDTO[]) {
    var dates = [];
    for (let period of datePeriods) {
      var startDate = new Date(period.startDate);
      let endDate = new Date(period.endDate);
      while (startDate <= endDate) {
        dates.push(startDate);
        startDate = new Date(startDate.getTime() + (24 * 60 * 60 * 1000));
      }
    }
    return dates;
  }

  getdealDates() {
    var dates = [];
    for (let deal of this.superDeals) {
      var startDate = new Date(deal.startDate);
      let endDate = new Date(deal.endDate);
      while (startDate <= endDate) {
        dates.push(startDate);
        startDate = new Date(startDate.getTime() + (24 * 60 * 60 * 1000));
      }
    }
    return dates;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {

      if (this.compareReservedDates(cellDate)) {
        return 'reserved-date';
      } else if (this.compareDealDates(cellDate)) {
        return 'deal-date';
      } else if (this.isNotAvailable(cellDate)) {
        return 'not-available-date';
      }

    }
    return '';
  };

  compareDealDates(date: Date): boolean {
    for (let d of this.dealDates) {
      if (d.getDate() == date.getDate() && d.getMonth() == date.getMonth() && d.getFullYear() == date.getFullYear()) {
        return true;
      }
    }
    return false;
  }

  compareReservedDates(date: Date): boolean {
    for (let d of this.reservedDates) {
      if (d.getDate() == date.getDate() && d.getMonth() == date.getMonth() && d.getFullYear() == date.getFullYear()) {
        return true;
      }
    }
    return false;
  }

  isNotAvailable(date: Date): boolean {
    return date > new Date(this.availabilityPeriod.endDate) || date < new Date(this.availabilityPeriod.startDate) ? true : false;
  }

  dateChanged() {
    console.log(this.compareReservedDates(this.selectedDate));
    this.cottageService.getReservationDetails(this.id, this.selectedDate);
  }

}
