import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from 'src/app/entity/Adventure';
import { AdventureDTO } from 'src/app/entity/AdventureDTO';
import { AdventureService } from 'src/app/services/adventure.service';


@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {

  instructorId !: number;
  @Input()
  forInstructor: boolean = false;

  // client and main page show adventures of fishing instructor
  @Input()
  forClientInsructorAdventures = false;
  sortByGroup!: FormGroup;
  orderGroup!: FormGroup;
  forClientSubscriptions: boolean = false;
  
  constructor(private adventureService: AdventureService, private route: ActivatedRoute) { }

  adventures: AdventureDTO[] = [];


  ngOnInit(): void {

    this.sortByGroup = new FormGroup({
      'sortByRadio' : new FormControl()
    });

    this.orderGroup = new FormGroup({
      'orderRadio' : new FormControl()
    });

    this.orderGroup.patchValue({orderRadio: 'ASC'});


    this.route.params.subscribe((param) => {
      this.instructorId = param.instructorId;
    });

    if (this.forClientInsructorAdventures) {
      this.adventureService.getAllAdventuresByInstructor(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
    }
    else {
      this.adventureService.getAllAdventures().subscribe((adventures) => (this.adventures = adventures));
    }
  }

  getSorted(){
    this.adventureService.getAllAdventures(this.sortByGroup.value.sortByRadio, this.orderGroup.value.orderRadio).subscribe((adventures) => (this.adventures = adventures));
   }

  // sortByPrice() {
  //   if (this.forClientInsructorAdventures) {
  //     // this.adventureService.getAllAdventuresByInstructorOrderByPrice(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
  //   } else {
  //     // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
  //   }
  // }

  // sortByName() {
  //   if (this.forClientInsructorAdventures) {
  //     this.adventureService.getAllAdventuresByInstructorOrderByName(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
  //   } else {
  //     // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
  //   }
  // }

  // sortByCapacity() {
  //   if (this.forClientInsructorAdventures) {
  //     //this.adventureService.getAllAdventuresByInstructorOrderByCapacity(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
  //   } else {
  //     // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
  //   }
  // }

  // sortByRating() {
  //   if (this.forClientInsructorAdventures) {
  //     //this.adventureService.getAllAdventuresByInstructorOrderByCRating(this.instructorId).subscribe((adventures) => (this.adventures = adventures));
  //   } else {
  //     // Ako treba nekome sortiranje svih ili nekih koji nisu pokupljeni po instruktoru
  //   }
  //   if (this.forInstructor) {
  //     this.adventureService.getAllAdventuresByOwner()
  //       .subscribe((adventures) => (this.adventures = adventures));
  //   }
  //   else {
  //     this.adventureService.getAllAdventures().subscribe((adventures) => (this.adventures = adventures));
  //   }
  // }
  notClientSubscriptions(): boolean {
    return !this.forClientSubscriptions;
  }

}