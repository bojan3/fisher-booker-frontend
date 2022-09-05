import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvailabilityPeriod } from 'src/app/entity/AvailabilityPeriod';
import { Cottage } from 'src/app/entity/Cottage';
import { EditCottageDTO } from 'src/app/entity/DTO/EditCottageDTO';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CottageService } from 'src/app/services/cottage.service';
import { EditAvailabilityPeriodComponent } from '../edit-availability-period/edit-availability-period.component';
import { EditImageComponent } from '../edit-image/edit-image.component';
import { EditOptionsComponent } from '../edit-options/edit-options.component';
import { EditRoomsComponent } from '../edit-rooms/edit-rooms.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';

@Component({
  selector: 'app-edit-cottage',
  templateUrl: './edit-cottage.component.html',
  styleUrls: ['./edit-cottage.component.css']
})
export class EditCottageComponent implements OnInit {

  cottage: EditCottageDTO = new EditCottageDTO();
  showForm: boolean = false;
  form!: FormGroup;
  showError: boolean = false;;

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
          this.cottage = this.toEditCottageDTO(cottage);
          this.buildForm();
          this.showForm = true;
        });
      } 
    });
  }

  toEditCottageDTO(cottage: Cottage){
    let editCottage = new EditCottageDTO();
    editCottage.id = cottage.id;
    editCottage.name = cottage.name;
    editCottage.description = cottage.description;
    editCottage.address = cottage.address;
    editCottage.pricePerDay = cottage.pricePerDay;
    editCottage.rooms = cottage.rooms;
    editCottage.rules = cottage.rules;
    editCottage.availabilityPeriod = cottage.availabilityPeriod;
    editCottage.cottageOptions = cottage.cottageOptions;
    return editCottage;
  }

  onSubmit() {
    this.formCottage()
    this.cottageService.updateCottage(this.cottage).subscribe((res) => {
      if(!res){
        this.showError = true;
      }
      console.log(res);
    }, (error) => {
      this.showError = true;
    })
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
