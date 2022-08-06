import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Cottage } from 'src/app/entity/Cottage';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCottageDTO } from 'src/app/entity/DTO/AddCottageDTO';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CottageService } from 'src/app/services/cottage.service';
import { EditImageComponent } from '../edit-image/edit-image.component';
import { EditOptionsComponent } from '../edit-options/edit-options.component';
import { EditRoomsComponent } from '../edit-rooms/edit-rooms.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';
import { EditAvailabilityPeriodComponent } from '../edit-availability-period/edit-availability-period.component';
import { AvailabilityPeriod } from 'src/app/entity/AvailabilityPeriod';

@Component({
  selector: 'app-add-cottage',
  templateUrl: './add-cottage.component.html',
  styleUrls: ['./add-cottage.component.css']
})

export class AddCottageComponent implements OnInit {

  @Input()
  cottage: AddCottageDTO = new AddCottageDTO();
  showForm: boolean = false;
  form!: UntypedFormGroup;

  @ViewChild(EditRoomsComponent)
  editRoomsComponent!: EditRoomsComponent;
  @ViewChild(EditRulesComponent)
  editRulesComponent!: EditRoomsComponent;
  @ViewChild(EditOptionsComponent)
  editOptionsComponent!: EditOptionsComponent;
  @ViewChild(EditAvailabilityPeriodComponent)
  editAvailabilityPeriodComponent!: EditAvailabilityPeriodComponent;
  @ViewChild(EditImageComponent)
  editImageComponent!: EditImageComponent;

  constructor(private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private cottageService: CottageService,
    private accountService: AccountService,
    private authService: AuthService) { }

  ngOnInit(): void {

    // if (this.accountService.currentUser.role != 'ROLE_COTTAGE_OWNER') {
    //   this.authService.logout();
    // }

    this.route.queryParams
      .subscribe(params => {
        if (params.id) {
          this.cottageService.getById(params.id).subscribe((cottage) => {
            console.log(cottage);
            this.buildForm();
            //this.cottage = cottage;
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
    // console.log(this.cottage);
    // this.cottageService.uploadImage(this.cottage, this.editImageComponent.image).subscribe((res) => {
    //   console.log(res);
    // })
  }

  formCottage() {
    this.cottage.name = this.form.get('name')?.value;
    this.cottage.address = this.form.get('address')?.value;
    this.cottage.description = this.form.get('description')?.value;
    this.cottage.pricePerDay = this.form.get('pricePerDay')?.value;
    this.cottage.rooms = this.editRoomsComponent.form.value.rooms;
    this.cottage.rules = this.editRulesComponent.form.value.rules;
    this.cottage.cottageOptions = this.editOptionsComponent.form.value.options;
    this.cottage.availabilityPeriod = new AvailabilityPeriod(0, this.editAvailabilityPeriodComponent.dateRange.value.start, this.editAvailabilityPeriodComponent.dateRange.value.end);
    
    // this.cottage.imageName = this.editImageComponent.image.name;
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
    })
  }

  cancelChanges() {

  }

}
