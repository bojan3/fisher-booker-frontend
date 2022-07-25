import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cottage } from 'src/app/entity/Cottage';
import { Room } from 'src/app/entity/Room';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CottageService } from 'src/app/services/cottage.service';
import { EditOptionsComponent } from '../edit-options/edit-options.component';
import { EditRoomsComponent } from '../edit-rooms/edit-rooms.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';
import { EditSuperDealComponent } from '../edit-super-deal/edit-super-deal.component';

@Component({
  selector: 'app-add-cottage',
  templateUrl: './add-cottage.component.html',
  styleUrls: ['./add-cottage.component.css']
})

export class AddCottageComponent implements OnInit {

  @Input()
  cottage: Cottage = new Cottage();
  showForm: boolean = false;
  form!: UntypedFormGroup;

  @ViewChild(EditRoomsComponent)
  editRoomsComponent!: EditRoomsComponent;
  @ViewChild(EditRulesComponent)
  editRulesComponent!: EditRoomsComponent;
  @ViewChild(EditOptionsComponent)
  editOptionsComponent!: EditOptionsComponent;
  @ViewChild(EditSuperDealComponent)
  editSuperDealComponent!: EditSuperDealComponent;

  constructor(private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private cottageService: CottageService,
    private accountService: AccountService,
    private authService: AuthService) { }

  ngOnInit(): void {

    if (this.accountService.currentUser.role != 'ROLE_COTTAGE_OWNER') {
      this.authService.logout();
    }

    this.route.queryParams
      .subscribe(params => {
        if (params.id) {
          this.cottageService.getById(params.id).subscribe((cottage) => {
            console.log(cottage);
            this.buildForm();
            this.cottage = cottage;
            this.showForm = true;
          });
        } else {
          this.buildForm();
          this.showForm = true;
        }
      });
  }

  onSubmit() {
    this.formCottage()
    this.cottageService.saveCottage(this.cottage).subscribe((res) => {
      console.log(res);
    })
    console.log(this.cottage);
  }

  formCottage() {
    this.cottage.name = this.form.get('name')?.value;
    this.cottage.address = this.form.get('address')?.value;
    this.cottage.description = this.form.get('description')?.value;
    this.cottage.pricePerDay = this.form.get('pricePerDay')?.value;
    this.cottage.availabilityPeriod = this.form.get('availabilityPeriod')?.value;
    this.cottage.rooms = this.editRoomsComponent.form.value.rooms;
    this.cottage.rules = this.editRulesComponent.form.value.rules;
    this.cottage.cottageOptions = this.editOptionsComponent.form.value.options;
    this.cottage.cottageSuperDeals = this.editSuperDealComponent.form.value.superDeals;
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [this.cottage.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      address: this.formBuilder.group({
        country: [this.cottage.address.country],
        city: [this.cottage.address.city],
        street: [this.cottage.address.street],
        number: [this.cottage.address.number]
      }),
      description: [this.cottage.description, Validators.compose([Validators.minLength(3), Validators.maxLength(300)])],
      pricePerDay: [this.cottage.pricePerDay],
      availabilityPeriod: this.formBuilder.group({
        /*startDate: [this.cottage.availabilityPeriod.startDate],
        endDate: [this.cottage.availabilityPeriod.endDate]*/
        startDate: ['asd'],
        endDate: ['sad']
      })
    })
  }

  cancelChanges() {

  }

}
