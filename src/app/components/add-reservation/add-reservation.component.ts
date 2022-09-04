import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Validators, FormArray, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AddSuperDealDTO } from 'src/app/entity/DTO/AddSupeDealDTO';
import { RealEstateType } from 'src/app/entity/RealEstateType';
import { CottageService } from 'src/app/services/cottage.service';
import { ShipService } from 'src/app/services/ship.service';
import { Option } from 'src/app/entity/Option';
import { AddReservationDTO } from 'src/app/entity/DTO/AddReservationDTO';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { DateRangeComponent } from '../date-range/date-range.component';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  @Input()
  type!: ReservationType;
  @Input()
  realEstateId!: number;
  @Input()
  clientId!: number;

  // newReservation: AddReservationDTO = new AddReservationDTO();
  options: Option[] = [];
  showForm = false;
  showConflictMessage = false;

  form!: FormGroup;

  @ViewChild(DateRangeComponent)
  dateRangeComponent!: DateRangeComponent;

  constructor(private formBuilder: FormBuilder,
    private cottageService: CottageService,
    private shipService: ShipService) { }

  ngOnInit(): void {
    switch (this.type) {
      case ReservationType.COTTAGE: {
        this.cottageService.getOptions(this.realEstateId).subscribe((options) => {
          this.options = options;
          this.showForm = true;
        })
        break;
      }
      case ReservationType.SHIP: {
        this.shipService.getOptions(this.realEstateId).subscribe((options) => {
          this.options = options;
          this.showForm = true;
        })
        break;
      }
    }
    this.createReservation();
  }

  createReservation() {
    this.form = this.formBuilder.group({
      startDate: [, Validators.compose([Validators.required])],
      endDate: [, Validators.compose([Validators.required])],
      price: [, Validators.compose([Validators.required])],
      capacity: [, Validators.compose([Validators.required])],
      options: this.formBuilder.array([])
    });
  }

  submit() {
    if (this.dateRangeComponent.startDate == null || this.dateRangeComponent.endDate == null) {
      return;
    }
    var newReservation = new AddReservationDTO(this.dateRangeComponent.startDate,
      this.form.value.discountedPrice, this.dateRangeComponent.endDate, this.form.value.capacity, this.realEstateId,
      this.form.value.options, this.type, this.clientId);

    this.cottageService.createReservation(newReservation).subscribe((res) => {
      window.location.reload();
    }, (error) => {
      this.showConflictMessage = true;
    });

  }

  onChangeEventFunc(id: number, isChecked: any) {
    const ops = (this.form.controls.options as FormArray);
    if (isChecked) {
      ops.push(new FormControl(id));
    } else {
      const index = ops.controls.findIndex(x => x.value === id);
      ops.removeAt(index);
    }
  }

}
