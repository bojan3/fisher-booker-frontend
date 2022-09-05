import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { RealEstateType } from 'src/app/entity/RealEstateType';
import { Ship } from 'src/app/entity/Ship';
import { ShipService } from 'src/app/services/ship.service';
import { AddSuperDealComponent } from '../add-super-deal/add-super-deal.component';
import { Image } from 'src/app/entity/Image';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateRangeComponent } from '../date-range/date-range.component';
import { AccountService } from 'src/app/services/account.service';
import { AddReservationDTO } from 'src/app/entity/DTO/AddReservationDTO';
import { ClientService } from 'src/app/services/client.service';

const MILISECINDAY = 86400000;
import { EditShipDTO } from 'src/app/entity/DTO/EditShipDTO';

@Component({
  selector: 'app-ship-page',
  templateUrl: './ship-page.component.html',
  styleUrls: ['./ship-page.component.css']
})
export class ShipPageComponent implements OnInit {

  id: string = '';
  ship!: Ship;
  shipIsPresent: boolean = false;
  ownership: boolean = false;
  form!: FormGroup;
  
  @ViewChild(DateRangeComponent)
  dateRangeComponent!: DateRangeComponent;

  ediShipDTO!: EditShipDTO

  constructor(private route: ActivatedRoute, 
    private shipService: ShipService, 
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private clientService: ClientService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.shipService.getById(this.id).subscribe((ship) => {
        this.ship = ship;
        this.shipIsPresent = true;
        // this.ediShipDTO = this.ship.toEditShipDTO()
      });
      this.shipService.checkShipOwnersip(this.id).subscribe((res) => {
        this.ownership = res;
      })
    })

    this.createReservation();
  }

  rulesToString() {
    if (this.ship) {
      let rules = this.ship.rules;
      let output = '';
      rules.forEach(rule => {
        output += rule.description + ', ';
      });
      return this.removeLastCommaAndSpace(output);
    }
    return '';
  }

  navigationToString() {
    if (this.ship) {
      let navs = this.ship.navigationEquipments;
      let output = '';
      navs.forEach(nav => {
        output += nav.name + ', ';
      });

      return this.removeLastCommaAndSpace(output);
    }
    return '';
  }

  fishingToString() {
    if (this.ship) {
      let fishingEquipments = this.ship.fishingEquipments;
      let output = '';
      fishingEquipments.forEach(f => {
        output += f.name + ', ';
      });

      return this.removeLastCommaAndSpace(output);
    }
    return '';
  }

  removeLastCommaAndSpace(string: string) {
    return string.slice(0, string.length - 2);
  }

  formatDate(date: Date) {
    return date;
  }

  openAddSupeDealDialog() {
    this.dialog.open(AddSuperDealComponent, {data: {realEstateId: this.ship.id, type: ReservationType.SHIP}})
  }


  getImage(image: Image) {
    'data:image/jpeg;base64,' + image.image
  }

  deleteImage(event: any) {
    this.shipService.deleteImage(event.target.id).subscribe((res) => {
      window.location.reload()
    })
  }

  createReservation() {
    this.form = this.formBuilder.group({
      startDate: [, Validators.compose([Validators.required])],
      endDate: [, Validators.compose([Validators.required])],
      price: [, Validators.compose([Validators.required])],
      capacity: [, Validators.compose([Validators.required])],
      options: this.formBuilder.array([])
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

  showForm(){
    return this.accountService.currentUser == 'ROLE_CLIENT';
  }

  makeReservation(){
    if (this.dateRangeComponent.startDate == null || this.dateRangeComponent.endDate == null) {
      return;
    }

    var numOfDays = (this.dateRangeComponent.endDate.getTime() - this.dateRangeComponent.startDate.getTime()) / MILISECINDAY;

    var newReservation = new AddReservationDTO(this.dateRangeComponent.startDate,
      this.ship.rentPrice * numOfDays, this.dateRangeComponent.endDate, this.form.value.capacity, this.ship.id,
      this.form.value.options, ReservationType.SHIP, this.accountService.currentUser.id);

      this.clientService.createReservation(newReservation).subscribe();
    }

}
