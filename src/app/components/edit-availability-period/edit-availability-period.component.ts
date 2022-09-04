import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-availability-period',
  templateUrl: './edit-availability-period.component.html',
  styleUrls: ['./edit-availability-period.component.css']
})
export class EditAvailabilityPeriodComponent implements OnInit {

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return date === 1 || date === 20 ? 'special-date' : '';
    }
    return '';
  };

}
