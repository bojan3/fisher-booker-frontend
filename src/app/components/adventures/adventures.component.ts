import { Component, OnInit } from '@angular/core';
import { Adventure } from 'src/app/entity/Adventure';
import { AdventureService } from 'src/app/services/adventure.service';


@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {


  constructor(private adventureService : AdventureService) { }

  adventures: Adventure[] = [];


   ngOnInit(): void {

    this.adventureService.getAllAdventures().subscribe((adventures) => (this.adventures = adventures));

  }

}
