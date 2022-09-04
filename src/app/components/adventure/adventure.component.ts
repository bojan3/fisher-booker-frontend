import { Component, Input,OnInit } from '@angular/core';
import { Adventure } from 'src/app/entity/Adventure';
import { AdventureDTO } from 'src/app/entity/AdventureDTO';
import { AdventureService } from 'src/app/services/adventure.service';


@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor(private adventureService: AdventureService) { }
  @Input()
  adventure !: Adventure;
  ngOnInit(): void {
  }

  delete(id:number):void{

    this.adventureService.delete(id).subscribe();
  }

  details(id:number):void{
    this.adventureService.delete(id).subscribe();
  }

}
