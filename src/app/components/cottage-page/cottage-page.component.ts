import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouteConfigLoadEnd} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cottage } from 'src/app/entity/Cottage';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-cottage-page',
  templateUrl: './cottage-page.component.html',
  styleUrls: ['./cottage-page.component.css']
})
export class CottagePageComponent implements OnInit {

  id: string = '';
  cottage!: Cottage;

  constructor(route: ActivatedRoute, cottageService: CottageService) { 
    route.params.subscribe((param) => {
      this.id = param.id;
      cottageService.getById(this.id).subscribe((cottage) => {
        this.cottage = cottage;
        console.log(cottage);
      });
    })
    
  }

  ngOnInit(): void {
    
  }

}
