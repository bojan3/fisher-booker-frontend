import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from 'src/app/entity/Adventure';
import { AdventureService } from 'src/app/services/adventure.service';


@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {


  // client and main page show adventures by fishing instructor
  @Input()
  forClientInsructorAdventures = false;

  constructor(private adventureService: AdventureService, private route: ActivatedRoute) { }

  adventures: Adventure[] = [];


  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.instructorId = param.instructorId;
      console.log("token :" + this.instructorId);
    });

    if (this.forClientInsructorAdventures) {
      this.adventureService.getAllAdventuresByInstructor(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
    }
    else {
      this.adventureService.getAllAdventures().subscribe((adventures) => (this.adventures = adventures));
    }
  }

  sortByPrice() {
    if (this.forClientInsructorAdventures) {
      // this.adventureService.getAllAdventuresByInstructorOrderByPrice(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
    } else {
      // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
    }
  }

  sortByName() {
    if (this.forClientInsructorAdventures) {
      this.adventureService.getAllAdventuresByInstructorOrderByName(this.instructorId).subscribe((adventures: Adventure[]) => (this.adventures = adventures));
    } else {
      // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
    }
  }

  sortByCapacity() {
    if (this.forClientInsructorAdventures) {
      //this.adventureService.getAllAdventuresByInstructorOrderByCapacity(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
    } else {
      // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
    }
  }

  sortByRating() {
    if (this.forClientInsructorAdventures) {
      //this.adventureService.getAllAdventuresByInstructorOrderByCRating(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
    } else {
      // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
    }
  }


}
