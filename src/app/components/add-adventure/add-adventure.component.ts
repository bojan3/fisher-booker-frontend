import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Cottage } from 'src/app/entity/Cottage';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddAdventureDTO } from 'src/app/entity/DTO/AddAdventureDTO';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CottageService } from 'src/app/services/cottage.service';
import { EditImageComponent } from '../edit-image/edit-image.component';
import { EditOptionsComponent } from '../edit-options/edit-options.component';
import { EditRoomsComponent } from '../edit-rooms/edit-rooms.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';
import { EditAvailabilityPeriodComponent } from '../edit-availability-period/edit-availability-period.component';
import { AvailabilityPeriod } from 'src/app/entity/AvailabilityPeriod';
import { AdventureService } from 'src/app/services/adventure.service';

@Component({
  selector: 'app-add-adventure',
  templateUrl: './add-adventure.component.html',
  styleUrls: ['./add-adventure.component.css']
})

export class AddAdventureComponent implements OnInit {

  adventure: AddAdventureDTO = new AddAdventureDTO();
  showForm: boolean = false;
  form!: FormGroup;

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
    private router: Router,
    private formBuilder: FormBuilder,
    private adventureService: AdventureService,
    private accountService: AccountService,
    private authService: AuthService) { }

  ngOnInit(): void {    
    this.accountService.getMyInfo().subscribe((user) => {
      if (user.role != 'ROLE_INSTRUCTOR') {      
        this.authService.logout();
        this.router.navigate(['/logIn'])
      }
      this.buildForm();
    }, (error) => {
      this.router.navigate(['/logIn'])
    })
  }

  onSubmit() {
    this.formCottage()
    this.adventureService.saveAdventure(this.adventure).subscribe((res) => {
      console.log(res);
    })
  }

  formCottage() {
    this.adventure.name = this.form.get('name')?.value;
    this.adventure.address = this.form.get('address')?.value;
    this.adventure.description = this.form.get('description')?.value;
    this.adventure.pricePerDay = this.form.get('pricePerDay')?.value;
   // this.adventure.rooms = this.editRoomsComponent.form.value.rooms;
    this.adventure.rules = this.editRulesComponent.form.value.rules;
    this.adventure.adventureOptions = this.editOptionsComponent.form.value.options;
    //this.adventure.availabilityPeriod = new AvailabilityPeriod(0, this.editAvailabilityPeriodComponent.dateRange.value.start, this.editAvailabilityPeriodComponent.dateRange.value.end);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [this.adventure.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      address: this.formBuilder.group({
        country: [this.adventure.address.country],
        city: [this.adventure.address.city],
        street: [this.adventure.address.street],
        number: [this.adventure.address.number]
      }),
      description: [this.adventure.description, Validators.compose([Validators.minLength(3), Validators.maxLength(300)])],
      pricePerDay: [this.adventure.pricePerDay],
    })
  }

  cancelChanges() {

  }

}