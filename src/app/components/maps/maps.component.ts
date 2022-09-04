import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/entity/Address';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  @Input()
  address: Address = new Address(1, "Serbia", "Novi Sad", "Bulevar Oslobodjenja", "1");
  lat: number = 55.751952;
  long: number = 37.600739

  constructor(private mapsService: MapsService) { }

  ngOnInit(): void {
    // this.mapsService.getCoord(this.addressToString()).subscribe((response) => {
    //   var geoObjectCollection = Object.values(response)[0];
    //   var f = Object.values(geoObjectCollection)[0];
    //   var geoObject = (Object.values(f as Object)[1])[0] as Object;
    //   var info = Object.values(geoObject)[0];
    //   var point = Object.values(info)[4];
    //   var pos = Object.values(point as Object)[0];
    //   this.convertPosToCoord(pos);
    // })
  }

  convertPosToCoord(pos: string){
    var latLong = pos.split(" ")
    this.lat = +latLong[1];
    this.long = +latLong[0];
  }

  addressToString() {
    if(this.address != undefined){
      return this.address.country + ',' + this.address.city + ',' + this.address.street + ',' + this.address.number;
    }
    return ""
  }

}
