import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperDeal } from 'src/app/entity/SuperDeal';
import { CottageService } from 'src/app/services/cottage.service';
import { Option } from 'src/app/entity/Option';
import { AddSuperDealDTO } from 'src/app/entity/DTO/AddSupeDealDTO';
import { RealEstateType } from 'src/app/entity/RealEstateType';
import { ShipService } from 'src/app/services/ship.service';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { DateRangeComponent } from '../date-range/date-range.component';


export interface SomeData {
  realEstateId: number
  type: ReservationType
  notAvailableDates: Date[]
}

@Component({
  selector: 'app-add-super-deal',
  templateUrl: './add-super-deal.component.html',
  styleUrls: ['./add-super-deal.component.css']
})
export class AddSuperDealComponent implements OnInit {

  superDeal: SuperDeal = new SuperDeal();
  realEstateId!: number;
  type!: ReservationType;
  notAvailableDates: Date[] = [];
  showForm = false;
  showConflictMessage = false;

  form!: FormGroup;

  @Input()
  options: Option[] = [];
  @ViewChild(DateRangeComponent)
  dateRangeComponent!: DateRangeComponent;

  constructor(private formBuilder: FormBuilder,
    private cottageService: CottageService,
    private shipService: ShipService,
    @Inject(MAT_DIALOG_DATA) public data: SomeData) {
    this.realEstateId = data.realEstateId;
    this.type = data.type;
    this.notAvailableDates = data.notAvailableDates;
  }

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
    this.createSuperDeal();
  }

  createSuperDeal() {
    this.form = this.formBuilder.group({
      id: [this.superDeal.id],
      discountedPrice: [this.superDeal.discountedPrice, Validators.compose([Validators.required])],
      capacity: [this.superDeal.capacity, Validators.compose([Validators.required])],
      options: this.formBuilder.array([])
    });
  }

  submit() {
    if (this.dateRangeComponent.startDate == null || this.dateRangeComponent.endDate == null) {
      return;
    }
    var newDeal = new AddSuperDealDTO(this.dateRangeComponent.startDate,
      this.form.value.discountedPrice, this.dateRangeComponent.endDate, this.form.value.capacity, this.realEstateId,
      this.form.value.options, this.type);

    this.cottageService.createSuperDeal(newDeal).subscribe((res) => {
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
