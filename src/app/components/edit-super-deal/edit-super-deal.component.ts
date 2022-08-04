import { Component, Inject, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSuperDealDTO } from 'src/app/entity/DTO/AddSupeDealDTO';
import { SuperDeal } from 'src/app/entity/SuperDeal';
import { CottageService } from 'src/app/services/cottage.service';

export interface SomeData {
  realEstateId: string
}

@Component({
  selector: 'app-edit-super-deal',
  templateUrl: './edit-super-deal.component.html',
  styleUrls: ['./edit-super-deal.component.css']
})
export class EditSuperDealComponent implements OnInit {

  @Input()
  superDeal: SuperDeal = new SuperDeal();
  realEstateId: string = '';

  form!: UntypedFormGroup;
  superDealsForm!: UntypedFormArray;

  constructor(private formBuilder: UntypedFormBuilder, private cottageService: CottageService,
    @Inject(MAT_DIALOG_DATA) public data: SomeData) {
    this.realEstateId = data.realEstateId;
    console.log(this.realEstateId);
  }

  ngOnInit(): void {
    this.createSuperDeal();
  }

  createSuperDeal() {
    this.form = this.formBuilder.group({
      id: [this.superDeal.id],
      startDate: [this.superDeal.startDate, Validators.compose([Validators.required])],
      endDate: [this.superDeal.endDate, Validators.compose([Validators.required])],
      discountedPrice: [this.superDeal.discountedPrice, Validators.compose([Validators.required])],
      capacity: [this.superDeal.capacity, Validators.compose([Validators.required])]
    });
  }

  submit() {
    var newDeal = new AddSuperDealDTO(this.form.value.id, this.form.value.startDate,
      this.form.value.discountedPrice, this.form.value.endDate, this.form.value.capacity, this.realEstateId);
  }

}
