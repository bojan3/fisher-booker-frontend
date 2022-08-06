import { Component, Inject, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperDeal } from 'src/app/entity/SuperDeal';
import { CottageService } from 'src/app/services/cottage.service';
import { Option } from 'src/app/entity/Option';
import { AddSuperDealDTO } from 'src/app/entity/DTO/AddSupeDealDTO';

export interface SomeData {
  realEstateId: number
}

@Component({
  selector: 'app-add-super-deal',
  templateUrl: './add-super-deal.component.html',
  styleUrls: ['./add-super-deal.component.css']
})
export class AddSuperDealComponent implements OnInit {

  @Input()
  superDeal: SuperDeal = new SuperDeal();
  realEstateId!: number;
  showForm = false;

  form!: UntypedFormGroup;

  @Input()
  options: Option[] = [];

  constructor(private formBuilder: UntypedFormBuilder, private cottageService: CottageService,
    @Inject(MAT_DIALOG_DATA) public data: SomeData) {
    this.realEstateId = data.realEstateId;
    console.log(this.realEstateId);
  }

  ngOnInit(): void {
    this.cottageService.getOptions(this.realEstateId).subscribe((options) => {
      this.options = options;
      this.showForm = true;
    })
    this.createSuperDeal();
  }

  createSuperDeal() {
    this.form = this.formBuilder.group({
      id: [this.superDeal.id],
      startDate: [this.superDeal.startDate, Validators.compose([Validators.required])],
      endDate: [this.superDeal.endDate, Validators.compose([Validators.required])],
      discountedPrice: [this.superDeal.discountedPrice, Validators.compose([Validators.required])],
      capacity: [this.superDeal.capacity, Validators.compose([Validators.required])],
      options: this.formBuilder.array([])
    });
  }

  submit() {
    var newDeal = new AddSuperDealDTO(this.form.value.startDate,
      this.form.value.discountedPrice, this.form.value.endDate, this.form.value.capacity, this.realEstateId, this.form.value.options);
      this.cottageService.createSuperDeal(newDeal).subscribe((res) => {
        console.log(res);
        
      });
  }

  onChangeEventFunc(id: number, isChecked: any){
    const ops = (this.form.controls.options as FormArray);
    if (isChecked) {
      ops.push(new FormControl(id));
    } else {
      const index = ops.controls.findIndex(x => x.value === id);
      ops.removeAt(index);
    }
  }

}
