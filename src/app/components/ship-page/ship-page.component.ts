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

  constructor(private route: ActivatedRoute, private shipService: ShipService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.shipService.getById(this.id).subscribe((ship) => {
        console.log(ship);
        
        this.ship = ship;
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

}
