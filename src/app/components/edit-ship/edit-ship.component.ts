import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddShipDTO } from 'src/app/entity/DTO/AddShipDTO';
import { EditShipDTO } from 'src/app/entity/DTO/EditShipDTO';
import { Rule } from 'src/app/entity/Rule';
import { Ship } from 'src/app/entity/Ship';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { ShipService } from 'src/app/services/ship.service';
import { EditAvailabilityPeriodComponent } from '../edit-availability-period/edit-availability-period.component';
import { EditFishingEquipmentComponent } from '../edit-fishing-equipment/edit-fishing-equipment.component';
import { EditNavigationEquipmentComponent } from '../edit-navigation-equipment/edit-navigation-equipment.component';
import { EditOptionsComponent } from '../edit-options/edit-options.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';
import { wholeNumber, decimalNumber } from '../Regex';

@Component({
  selector: 'app-edit-ship',
  templateUrl: './edit-ship.component.html',
  styleUrls: ['./edit-ship.component.css']
})
export class EditShipComponent implements OnInit {

  ship: EditShipDTO = new EditShipDTO();
  showForm: boolean = false;
  form!: FormGroup;
  showError = false;

  @ViewChild(EditRulesComponent)
  editRulesComponent!: EditRulesComponent;
  @ViewChild(EditOptionsComponent)
  editOptionsComponent!: EditOptionsComponent;
  @ViewChild(EditNavigationEquipmentComponent)
  editNavigationEquipmentComponent!: EditNavigationEquipmentComponent;
  @ViewChild(EditFishingEquipmentComponent)
  editFishingEquipmentComponent!: EditFishingEquipmentComponent;
  @ViewChild(EditAvailabilityPeriodComponent)
  editAvailabilityPeriodsComponent!: EditAvailabilityPeriodComponent;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private shipService: ShipService,
    private accountService: AccountService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params.id) {
          this.shipService.getById(params.id).subscribe((ship) => {
            this.ship = this.toEditShipDTO(ship);
            this.buildForm()
            this.showForm = true;
          });
        } else {
          console.log('gde si');
        }
      })
  }

  toEditShipDTO(ship: Ship) {
    let editShip = new EditShipDTO();
    editShip.id = ship.id;
    editShip.name = ship.name;
    editShip.type = ship.type;
    editShip.length = ship.length;
    editShip.address = ship.address;
    editShip.description = ship.description;
    editShip.rentPrice = ship.rentPrice;
    editShip.engineNumber = ship.engineNumber;
    editShip.enginePower = ship.enginePower;
    editShip.maxSpeed = ship.maxSpeed;
    editShip.capacity = ship.capacity;
    editShip.cancelRate = ship.cancelRate;
    editShip.rules = ship.rules
    editShip.navigationEquipments = ship.navigationEquipments;
    editShip.fishingEquipments = ship.fishingEquipments;
    editShip.availabilityPeriod = ship.availabilityPeriod;
    editShip.shipOptions = ship.shipOptions;
    return editShip;
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [this.ship.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      address: this.formBuilder.group({
        country: [this.ship.address.country],
        city: [this.ship.address.city],
        street: [this.ship.address.street],
        number: [this.ship.address.number]
      }),
      description: [this.ship.description, Validators.compose([Validators.minLength(3), Validators.maxLength(300)])],
      type: [this.ship.type],
      length: [this.ship.length, Validators.compose([Validators.pattern(wholeNumber)])],
      engineNumber: [this.ship.engineNumber, Validators.compose([Validators.pattern(wholeNumber)])],
      enginePower: [this.ship.enginePower, Validators.compose([Validators.pattern(decimalNumber)])],
      maxSpeed: [this.ship.maxSpeed, Validators.compose([Validators.pattern(wholeNumber)])],
      capacity: [this.ship.capacity, Validators.compose([Validators.pattern(wholeNumber)])],
      rentPrice: [this.ship.rentPrice, Validators.compose([Validators.pattern(wholeNumber)])],
      cancelRate: [this.ship.cancelRate, Validators.compose([Validators.pattern(decimalNumber)])],
    })
  }

  onSubmit() {
    this.formShip()
    this.shipService.update(this.ship).subscribe(
      (res) => {
        if(!res) {
          this.showError = true;
        }
      }, (error) => {
        this.showError = true;
      });
  }

  formShip() {
    this.ship.name = this.form.get('name')?.value;
    this.ship.address = this.form.get('address')?.value;
    this.ship.type = this.form.get('type')?.value;
    this.ship.length = this.form.get('length')?.value;
    this.ship.description = this.form.get('description')?.value;
    this.ship.rentPrice = this.form.get('rentPrice')?.value;
    this.ship.engineNumber = this.form.get('engineNumber')?.value;
    this.ship.enginePower = this.form.get('enginePower')?.value;
    this.ship.maxSpeed = this.form.get('maxSpeed')?.value;
    this.ship.capacity = this.form.get('capacity')?.value;
    this.ship.cancelRate = this.form.get('cancelRate')?.value;

    this.ship.rules = this.editRulesComponent.form.value.rules;
    this.ship.shipOptions = this.editOptionsComponent.form.value.options;
    this.ship.navigationEquipments = this.editNavigationEquipmentComponent.form.value.navs;
    this.ship.fishingEquipments = this.editFishingEquipmentComponent.form.value.fishs;
    // this.ship.availabilityPeriods = this.editAvailabilityPeriodsComponent.form.value.periods;
  }

  convertToRules(fakeRules: any): Rule[] {
    var rules: Rule[] = [];

    fakeRules.forEach((element: any) => {
      rules.push(new Rule(element.id, element.name));
    });
    console.log(rules);

    return rules;
  }

  cancelChanges() {

  }

}
