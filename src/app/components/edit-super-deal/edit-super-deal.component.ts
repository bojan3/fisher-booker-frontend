import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { SuperDeal } from 'src/app/entity/SuperDeal';

@Component({
  selector: 'app-edit-super-deal',
  templateUrl: './edit-super-deal.component.html',
  styleUrls: ['./edit-super-deal.component.css']
})
export class EditSuperDealComponent implements OnInit {

  @Input()
  superDeals!: SuperDeal[];

  form!: UntypedFormGroup;
  superDealsForm!: UntypedFormArray;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      superDeals: this.formBuilder.array( this.createSuperDeals() )
    });
  }

  createSuperDeals(){
    let formatted: UntypedFormGroup[] = [];
    this.superDeals.forEach((superDeal) => {
      formatted.push(this.createSuperDeal(superDeal.id, superDeal.startDate, superDeal.endDate, superDeal.discountedPrice, superDeal.capacity));
    })
    return formatted;
  }

  createSuperDeal(defaultId: number, defaultStartDate: Date, defaultEndDate: Date, defaultPrice: number, defaultCapacity: number): UntypedFormGroup {
    return this.formBuilder.group({
      id: [defaultId],
      startDate: [defaultStartDate, Validators.compose([Validators.required])],
      endDate: [defaultEndDate, Validators.compose([Validators.required])],
      discountedPrice: [defaultPrice, Validators.compose([Validators.required])],
      capacity: [defaultCapacity, Validators.compose([Validators.required])]
    });
  }

  addSuperDeal(): void {
    this.superDealsForm = this.form.get('superDeals') as UntypedFormArray;
    this.superDealsForm.push(this.createSuperDeal(0, new Date(), new Date(), 0, 0));
    this.superDeals.push(new SuperDeal(0, new Date(), 0, new Date(), 0));
  }

  removeSuperDeal(i: number): void{
    this.superDealsForm = this.form.get('superDeals') as UntypedFormArray;
    this.superDealsForm.removeAt(i);
    this.superDeals = this.superDeals.filter((superDeal, index) => index != i)
  }

}
