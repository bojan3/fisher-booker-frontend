import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from 'src/app/entity/Adventure';
import { AdventureDTO } from 'src/app/entity/AdventureDTO';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { AccountService } from 'src/app/services/account.service';
import { AdventureService } from 'src/app/services/adventure.service';
import { AddSuperDealComponent } from '../add-super-deal/add-super-deal.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-adventure-page',
  templateUrl: './adventure-page.component.html',
  styleUrls: ['./adventure-page.component.css']
})
export class AdventurePageComponent implements OnInit {

  
  id: string = '';
  adventure!: AdventureDTO;
  adventureIsPresent = false;
  ownership: boolean = false;
  selectedDate: any;

  @ViewChild(CalendarComponent)
  calendar!: CalendarComponent;

  constructor(private route: ActivatedRoute,
     private adventureService: AdventureService,
      public dialog: MatDialog,
      private accountService: AccountService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.adventureService.getById(this.id).subscribe((adventure) => {
        this.adventure = adventure;
        console.log(adventure);
        console.log(this.accountService.currentUser.role);
        
        this.adventureIsPresent = true;
      });
      this.adventureService.checkAdventureOwnersip(this.id).subscribe((res) => {
        this.ownership = res;
      })
    })
  }


  rulesToString() {
    if (this.adventure) {
      let rules = this.adventure.rules;
      let output = '';
      rules.forEach(rule => {
        output += rule.description + ', ';
      });

      return this.removeLastCommaAndSpace(output);
    }
    return '';
  }

  formatDate(date: Date) {
    return date;
  }

  removeLastCommaAndSpace(string: string) {
    return string.slice(0, string.length - 2);
  }

  openAddSupeDealDialog() {
    var dates = this.calendar.dealDates.concat(this.calendar.reservedDates);
    this.dialog.open(AddSuperDealComponent, {data: {realEstateId: this.adventure.id,
       type: ReservationType.ADVENTURE, notAvailableDates: dates}})
  }

  onSelect(event: any){
    console.log(event);
    this.selectedDate = event;
  }

  openChart() {
    this.dialog.open(LineChartComponent)
  }

  //getImage(image: Image) {
  //  'data:image/jpeg;base64,' + image.image
  //}

  deleteImage(event: any) {
    this.adventureService.deleteImage(event.target.id).subscribe((res) => {
      window.location.reload()
    })
  }
}
