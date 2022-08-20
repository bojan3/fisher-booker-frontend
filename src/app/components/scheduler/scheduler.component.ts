import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { DefaultMatCalendarRangeStrategy } from '@angular/material/datepicker';
import { EventRenderedArgs, EventSettingsModel, setTime } from '@syncfusion/ej2-angular-schedule';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import { AdventureReservationService } from '../../services/adventure-reservation.service';
import { Account } from '../../entity/Account';
import { AdventureReservationDTO } from '../../entity/DTO/AdventureReservationDTO';
import { AccountService } from '../../services/account.service';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import { CottageReservationComponent } from '../cottage-reservation/cottage-reservation.component';
import { CottageReservationService } from '../../services/cottage-reservation.service';
import { ShipReservationService } from '../../services/ship-reservation.service';
import { CottageReservationDTO } from '../../entity/DTO/CottageReservationDTO';
import { ShipReservationDTO } from '../../entity/DTO/ShipReservationDTO';
import { CottageOwnerService } from '../../services/cottage-owner.service';
import { ReservationDetailsDTO } from '../../entity/DTO/ReservationDetailsDTO';


@Component({
  selector: 'app-scheduler',
  template: `<ejs-schedule  width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventObject"></ejs-schedule>`,
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent  {


 // private accountname:String

  opportunities!: Observable<AdventureReservationDTO[]>;

  private username!: string;
  private role!: string;


  private eventData : DataManager = new DataManager({
    url:'http://localhost:8081/api/adventurereservation/all/instructor_username/'+this.username,
    adaptor: new WebApiAdaptor,
    crossDomain:true
  });

  public test!: object[]

  public data1!: object[]

  public data2!:object[]

public delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

public selectedDate: Date = new Date(2022, 8, 15);
//public selectedDate1: Date = new Date(2022, 8, 16);

public eventObject!: EventSettingsModel
 
  constructor(private accountService: AccountService,
    private adventureReservationService: AdventureReservationService,
    private cottageReservationService: CottageReservationService,
    private shipReservationService: ShipReservationService,
    private cottageOwnerService: CottageOwnerService
    ) {
       // this.setAll(this.accountService.currentUser.username);
      // this.test = this.setAll()
  }

  ngOnInit(): void {

    this.username = this.accountService.currentUser.username;
    this.role = this.accountService.currentUser.role;

     //   this.setAll()
     this.getTest()
    }
setAll():void{

    this.getDataAData2(this.username,this.test)


}


  getDataAData2(username:string, data2:object[]):void {
   
   if(this.role==="ROLE_INSTRUCTOR"){
    this.adventureReservationService.getAllReservations(username).subscribe((data) => {
      console.log(data)
      data2 =this.getAdventureRData(data)
      this.test=data2
      console.log(this.test)
    });
  }

  if(this.role==="ROLE_COTTAGE_OWNER"){
    this.cottageReservationService.getAllReservations(username).subscribe((data) => {
      console.log(data)
      data2 =this.getCottageRData(data)
      this.test=data2
      console.log(this.test)
    });
  }

  if(this.role==="ROLE_SHIP_OWNER"){
    this.shipReservationService.getAllReservations(username).subscribe((data) => {
      console.log(data)
      data2 =this.getShipRData(data)
      this.test=data2
      console.log(this.test)
    });
  }


}

getShipRData(podaci: ShipReservationDTO[]):any[]{

  let rval : object[]=[]

   console.log(podaci)

  for (let i = 0; i < podaci.length; i++) {
   rval.push({
    id: podaci[i].id,
    Subject: podaci[i].shipDTO.name,
    Description: podaci[i].shipDTO.description,
    StartTime : this.parseDate(podaci[i].startDate),
    EndTime: this.parseDate(podaci[i].endDate)
   })

  }
  console.log(rval)
  this.eventObject={
  dataSource:rval
  }
  console.log(this.eventObject)
  return rval

}

getAdventureRData(podaci: AdventureReservationDTO[]):any[]{

  let rval : object[]=[]

   console.log(podaci)

  for (let i = 0; i < podaci.length; i++) {
   rval.push({
    id: podaci[i].id,
    Subject: podaci[i].adventureDTO.name,
    Description: podaci[i].adventureDTO.description,
    StartTime : this.parseDate(podaci[i].startDate),
    EndTime: this.parseDate(podaci[i].endDate)
   })

  }
  console.log(rval)
  this.eventObject={
  dataSource:rval
  }
  console.log(this.eventObject)
  return rval

}

getCottageRData(podaci: CottageReservationDTO[]):any[]{

  let rval : object[]=[]

   console.log(podaci)

 // console.log(podaci.length)

  for (let i = 0; i < podaci.length; i++) {
   rval.push({
    id: podaci[i].id,
    Subject: podaci[i].cottageDTO.name,
    Description: podaci[i].cottageDTO.description,
    //StartTime : this.parseDate(podaci[i].startDate),
    //EndTime: this.parseDate(podaci[i].endDate)
    StartTime: podaci[i].startDate,
    EndTime: podaci[i].endDate

   })

  }
  console.log(rval)
  this.eventObject={
  dataSource:rval
  }
  console.log(this.eventObject)
  return rval

}




parseDate(input:any) {
  var parts = input.match(/(\d+)/g);
  // note parts[1]-1
  return new Date(parts[2], parts[1]-1, parts[0]);
  
}

async getTest(){

  try{
    await this.setAll()
    return this.test
  }
  
  catch(err){
    return "Error"+err;
  }
  
}

  


fixdata(podaci:AdventureReservationDTO[]):object[]{
  let os!:Object[] 
  for (let i = 0; i < podaci.length; i++) {
    console.log(podaci[i]);
    console.log(podaci[i].startDate)

  }
  let podatak = {
     };


  return os
}






}
