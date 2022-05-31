import { Component, Input, OnInit } from '@angular/core';
import { CottageDTO } from 'src/app/entity/DTO/CottageDTO';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})

export class CottageComponent {

  @Input()
  cottage !: CottageDTO;
  errorDisplay: boolean = false;

  constructor(public cottageService: CottageService) { }

  delete(id: number): void {
    this.cottageService.deleteCottage(id).subscribe(
      (cottages) => {
        window.location.reload();
      },
      (error) => {
        this.errorDisplay = true;
      })
  }

}
