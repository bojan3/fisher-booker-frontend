import { Component, Input, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { AvailabilityPeriod } from 'src/app/entity/AvailabilityPeriod';
import { SuperDeal } from 'src/app/entity/SuperDeal';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input()
  superDeals: SuperDeal[] = [];

  @Input()
  availabilityPeriod!: AvailabilityPeriod;

  dates: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dates = this.getDates();
    console.log("dates:", this.availabilityPeriod);
  }

  getDates() {
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
      if (this.compareDates(cellDate)) {
        return 'reserved-date';
      }
      if (this.isNotAvailable(cellDate)) {
        return 'not-available-date';
      }
    }
    return '';
  };

  compareDates(date: Date): boolean {
    for (let d of this.dates) {
      if (d.getDate() == date.getDate() && d.getMonth() == date.getMonth() && d.getFullYear() == date.getFullYear()) {
        return true;
      }
    }
    return false;
  }

  isNotAvailable(date: Date): boolean {
    return date > new Date(this.availabilityPeriod.endDate) || date < new Date(this.availabilityPeriod.startDate) ? true : false;
  }

}
