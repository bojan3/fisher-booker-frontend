import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
  cottage!: Cottage;
  showForm: boolean = false;
  form!: FormGroup;

  @ViewChild(EditRoomsComponent)
  editRoomsComponent!: EditRoomsComponent;
  @ViewChild(EditRulesComponent)
  editRulesComponent!: EditRoomsComponent;
  @ViewChild(EditOptionsComponent)
  editOptionsComponent!: EditOptionsComponent;
  @ViewChild(EditSuperDealComponent)
  editSuperDealComponent!: EditSuperDealComponent;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
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
            
            this.cottage = cottage;
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
                startDate: [this.cottage.availabilityPeriod.startDate],
                endDate: [this.cottage.availabilityPeriod.endDate]
              })
            })
            this.showForm = true;
          });
        }
      });
  }

  onSubmit() {
    this.formCottage()
    console.log(this.cottage);
  }

  formCottage() {
    this.cottage.name = this.form.get('name')?.value;
    this.cottage.address = this.form.get('address')?.value;
    this.cottage.description = this.form.get('description')?.value;
    this.cottage.pricePerDay = this.form.get('pricePerDay')?.value;
    this.cottage.availabilityPeriod = this.form.get('availabiltyPeriod')?.value;
    this.cottage.rooms = Object.values(this.editRoomsComponent.form.value);
    this.cottage.rules = Object.values(this.editRulesComponent.form.value);
    this.cottage.cottageOptions = Object.values(this.editOptionsComponent.form.value);
    this.cottage.cottageSuperDeals = Object.values(this.editSuperDealComponent.form.value);
  }

  cancelChanges() {

  }

}
