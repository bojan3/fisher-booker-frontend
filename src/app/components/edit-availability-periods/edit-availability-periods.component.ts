import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AvailabilityPeriod } from 'src/app/entity/AvailabilityPeriod';
import { Room } from 'src/app/entity/Room';

@Component({
  selector: 'app-edit-availability-periods',
  templateUrl: './edit-availability-periods.component.html',
  styleUrls: ['./edit-availability-periods.component.css']
})
export class EditAvailabilityPeriodsComponent implements OnInit {

  @Input()
  periods: AvailabilityPeriod[] = [];

  form!: FormGroup;
  periodsForm!: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      periods: this.formBuilder.array( this.createPeriods() )
    });
  }

  createPeriods(){
    let formatted: FormGroup[] = [];
    this.periods.forEach((period) => {
      formatted.push(this.createPeriod(period.startDate, period.endDate));
    })
    return formatted;
  }

  createPeriod(startDate: Date, endDate: Date): FormGroup {
    return this.formBuilder.group({
      startDate: [startDate, Validators.compose([Validators.required])],
      endDate: [endDate],
    });
  }

  addPeriod(): void {
    this.periodsForm = this.form.get('periods') as FormArray;
    this.periodsForm.push(this.createPeriod(new Date(), new Date()));
    this.periods.push(new AvailabilityPeriod(0, new Date(), new Date()));
  }

  removePeriod(i: number): void{
    this.periodsForm = this.form.get('periods') as FormArray;
    this.periodsForm.removeAt(i);
    this.periods = this.periods.filter((period, index) => index != i)
  }

}
