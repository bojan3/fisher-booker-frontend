import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ship } from 'src/app/entity/Ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-page',
  templateUrl: './ship-page.component.html',
  styleUrls: ['./ship-page.component.css']
})
export class ShipPageComponent implements OnInit {

  id: string = '';
  ship!: Ship;
  shipIsPresent: boolean = false;

  constructor(private route: ActivatedRoute, private shipService: ShipService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.shipService.getById(this.id).subscribe((ship) => {
        this.ship = ship;
        this.shipIsPresent = true;
      });
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

  readImages() {
    var reader = new FileReader();
    this.ship.shipPictures.forEach((image) => {
      reader.readAsDataURL(image.file);
      reader.onload = (event) => {
        image.url = event.target?.result;
      }
    })
  }
}
