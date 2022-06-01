import { Component, OnInit, Input } from '@angular/core';
import { AdventureDTO } from 'src/app/entity/AdventureDTO';
import { AdventureService } from 'src/app/services/adventure.service';


@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {

  @Input()
  forInstructor: boolean = false;

  constructor(private adventureService : AdventureService) { }

  adventures: AdventureDTO[] = [];


   ngOnInit(): void {
if (this.forInstructor){
  this.adventureService.getAllAdventuresByOwner()
  .subscribe((adventures) => (this.adventures = adventures));
}
else{
    this.adventureService.getAllAdventures().subscribe((adventures) => (this.adventures = adventures));
   }
  }

}
