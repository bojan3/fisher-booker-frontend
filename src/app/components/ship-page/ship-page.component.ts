import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { RealEstateType } from 'src/app/entity/RealEstateType';
import { Ship } from 'src/app/entity/Ship';
import { ShipService } from 'src/app/services/ship.service';
import { AddSuperDealComponent } from '../add-super-deal/add-super-deal.component';
import { Image } from 'src/app/entity/Image';
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

  ediShipDTO!: EditShipDTO

  constructor(private route: ActivatedRoute, private shipService: ShipService, public dialog: MatDialog) { }

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
}
