import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePeriodDTO } from 'src/app/entity/DTO/DatePeriodDTO';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { DatesService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

  startDate!: Date | null;
  endDate!: Date | null;
  dayByDayDates: Date[] = [];
  showPickers = false;
  endEnabled = true;

  constructor(private dateService: DatesService) { }

  ngOnInit(): void {
    this.dateService.getReservationDates(ReservationType.COTTAGE, 1).subscribe((dates) => {
      this.dayByDayDates = this.getDayByDay(dates);
      this.dateService.getSuperDealDates(ReservationType.COTTAGE, 1).subscribe((dates) => {
        var ds = this.getDayByDay(dates);
        this.dayByDayDates.concat(ds);

        this.dayByDayDates.sort((a, b) => {
          if (a.getFullYear() != b.getFullYear()) {
            return a.getFullYear() - b.getFullYear();
          } else if (a.getMonth() != b.getMonth()) {
            return a.getMonth() - b.getMonth()
          } else {
            return a.getDate() - b.getDate();
          }
        });

        this.showPickers = true;
      })
    })
  }

  getDayByDay(datePeriods: DatePeriodDTO[]) {
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

  startFilter = (d: Date | null): boolean => {
    return !this.isReserved(d);
  };

  endFilter = (d: Date | null): boolean => {
    return !this.isReservedEnd(d);
  };

  isReserved(date: Date | null): boolean {
    if (date != null) {

      if (date < new Date()) {
        return true;
      }

      for (let d of this.dayByDayDates) {
        if (d.getDate() == date.getDate() && d.getMonth() == date.getMonth() && d.getFullYear() == date.getFullYear()) {
          return true;
        }
      }
      return false;
    }
    return true;
  }

  isReservedEnd(date: Date | null): boolean {
    if (date != null && this.startDate != null) {

      if (date <= this.startDate) {
        return true;
      }

      for (let d of this.dayByDayDates) {
        if ((d >= this.startDate) && (date >= d)) {
          console.log(date);

          return true;
        }
      }
      return false;
    }
    return true;
  }

}
