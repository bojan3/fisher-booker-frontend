import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Cottage } from 'src/app/entity/Cottage';
import { AddReservationDTO } from 'src/app/entity/DTO/AddReservationDTO';
import { CreateSuperDealReservation } from 'src/app/entity/DTO/CreateSuperDealReservation';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { Image } from 'src/app/entity/Image';
import { RealEstateType } from 'src/app/entity/RealEstateType';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { CottageService } from 'src/app/services/cottage.service';
import { AddSuperDealComponent } from '../add-super-deal/add-super-deal.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { DateRangeComponent } from '../date-range/date-range.component';
import { LineChartComponent } from '../line-chart/line-chart.component';

const MILISECINDAY = 86400000;

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
  form!: FormGroup;

  @ViewChild(CalendarComponent)
  calendar!: CalendarComponent;

  @ViewChild(DateRangeComponent)
  dateRangeComponent!: DateRangeComponent;

  constructor(private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private cottageService: CottageService,
      public dialog: MatDialog,
      private accountService: AccountService,
      private clientService: ClientService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.cottageService.getById(this.id).subscribe((cottage) => {
        this.cottage = cottage;
        console.log(cottage);
        console.log(this.accountService.currentUser.role);
        
        this.cottageIsPresent = true;
      });
      this.cottageService.checkCottageOwnersip(this.id).subscribe((res) => {
        this.ownership = res;
      })
    })
    this.createReservation();
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
    var dates = this.calendar.dealDates.concat(this.calendar.reservedDates);
    this.dialog.open(AddSuperDealComponent, {data: {realEstateId: this.cottage.id,
       type: ReservationType.COTTAGE, notAvailableDates: dates}})
  }

  onSelect(event: any){
    console.log(event);
    this.selectedDate = event;
  }

  openChart() {
    this.dialog.open(LineChartComponent)
  }

  getImage(image: Image) {
    'data:image/jpeg;base64,' + image.image
  }

  deleteImage(event: any) {
    this.cottageService.deleteImage(event.target.id).subscribe((res) => {
      window.location.reload()
    })
  }

  makeSuperDealReservation(event: any) {
    var superDealReservation = new CreateSuperDealReservation(this.accountService.currentUser.id,  event.target.id, ReservationType.COTTAGE)
    this.clientService.createSuperDealReservation(superDealReservation).subscribe();
  }

  makeReservation(){
    if (this.dateRangeComponent.startDate == null || this.dateRangeComponent.endDate == null) {
      return;
    }

    var numOfDays = (this.dateRangeComponent.endDate.getTime() - this.dateRangeComponent.startDate.getTime()) / MILISECINDAY;

    var newReservation = new AddReservationDTO(this.dateRangeComponent.startDate,
      this.cottage.pricePerDay * numOfDays, this.dateRangeComponent.endDate, this.form.value.capacity, this.cottage.id,
      this.form.value.options, ReservationType.COTTAGE, this.accountService.currentUser.id);

    this.clientService.createReservation(newReservation).subscribe();
  }

  onChangeEventFunc(id: number, isChecked: any) {
    const ops = (this.form.controls.options as FormArray);
    if (isChecked) {
      ops.push(new FormControl(id));
    } else {
      const index = ops.controls.findIndex(x => x.value === id);
      ops.removeAt(index);
    }
  }

  createReservation() {
    this.form = this.formBuilder.group({
      startDate: [, Validators.compose([Validators.required])],
      endDate: [, Validators.compose([Validators.required])],
      price: [, Validators.compose([Validators.required])],
      capacity: [, Validators.compose([Validators.required])],
      options: this.formBuilder.array([])
    });
  }

  showForm(): boolean{
    return this.accountService.currentUser == 'ROLE_CLIENT';
  }
}
