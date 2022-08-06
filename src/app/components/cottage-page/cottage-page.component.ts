import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Cottage } from 'src/app/entity/Cottage';
import { CottageService } from 'src/app/services/cottage.service';
import { AddSuperDealComponent } from '../add-super-deal/add-super-deal.component';

@Component({
  selector: 'app-cottage-page',
  templateUrl: './cottage-page.component.html',
  styleUrls: ['./cottage-page.component.css']
})
export class CottagePageComponent implements OnInit {

  id: string = '';
  cottage!: Cottage;
  cottageIsPresent = false;
  ownership: boolean = false;
  selectedDate: any;

  constructor(private route: ActivatedRoute, private cottageService: CottageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.cottageService.getById(this.id).subscribe((cottage) => {
        this.cottage = cottage;
        console.log(cottage);
        this.cottageIsPresent = true;
      });
      this.cottageService.checkCottageOwnersip(this.id).subscribe((res) => {
        this.ownership = res;
      })
    })
  }

  getNumberOfRoomsAndBeds() {
    if (this.cottage) {
      let rooms = this.cottage.rooms;
      let output = `Broj soba: ${rooms.length} (`;
      rooms.forEach((room) => {
        if (room.numOfBeds === 1) {
          output += room.numOfBeds + ' krevet, ';
        } else {
          output += room.numOfBeds + ' kreveta, ';
        }
      })
      return this.removeLastCommaAndSpace(output) + ')';
    }
    return '';
  }

  rulesToString() {
    if (this.cottage) {
      let rules = this.cottage.rules;
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
    this.dialog.open(AddSuperDealComponent, {data: {realEstateId: this.cottage.id}})
  }

  // dateClass() {

  //   return (date: Date): MatCalendarCellCssClasses => {
  //     var date1 = new Date();
  //     console.log(date.getDay());
      
  //     if (date.getDay() === 2) {
  //       console.log('ovde sam');
  //       return 'special-date';
  //     } else {
  //       return '';
  //     }
  //   };
  // }


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      console.log('alooooooooooooooooooooooooooooooooooo');
      
      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'special-date' : '';
    }

    return '';
  };

  onSelect(event: any){
    console.log(event);
    this.selectedDate = event;
  }
}
