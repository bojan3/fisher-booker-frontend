import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { DefaultMatCalendarRangeStrategy } from '@angular/material/datepicker';
import { EventRenderedArgs, EventSettingsModel, setTime } from '@syncfusion/ej2-angular-schedule';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import { AdventureReservationService } from '../adventure-reservation.service';
import { Account } from '../entity/Account';
import { AdventureReservationDTO } from '../entity/DTO/AdventureReservationDTO';
import { AccountService } from '../services/account.service';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';


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

  private eventData : DataManager = new DataManager({
    url:'http://localhost:8081/api/adventurereservation/all/instructor_username/'+this.username,
    adaptor: new WebApiAdaptor,
    crossDomain:true
  });

  public test!: object[]

  public data1!: object[]

  public data2!:object[]

  public data: object[] = [{
    Id: 2,
    Subject: 'Paris',
    Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
    des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
    StartTime: new Date(2022, 8, 15, 10, 0),
    EndTime: new Date(2022, 8, 15, 12, 30)
},
{
  Id: 3,
  Subject: 'London',
  Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
  des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
  StartTime: new Date(2022, 8, 16, 10, 0),
  EndTime: new Date(2022, 8, 17, 12, 30)
}

];

public delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

public selectedDate: Date = new Date(2022, 8, 15);
//public selectedDate1: Date = new Date(2022, 8, 16);

public eventObject!: EventSettingsModel
 

 // dataSource:  [
  //  {
    
 //     Id: 1,
 //     Subject: 'Belgrade',
 //     Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     StartTime: new Date(2022, 8, 10, 10, 0),
 //     EndTime: new Date(2022, 8, 11, 12, 30)
 //   },{
 //     Id: 2,
 //     Subject: 'Munchen',
 //     Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     StartTime: new Date(2022, 8, 9, 10, 0),
 //     EndTime: new Date(2022, 8, 12, 12, 30)
 //   },{
 //     Id: 3,
 //     Subject: 'Luxembourg',
 //     Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //    StartTime: new Date(2022, 8, 6, 10, 0),
 //     EndTime: new Date(2022, 8, 16, 12, 30)
 //   },{
 //     Id: 4,
 //     Subject: 'Madrid',
 //     Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     StartTime: new Date(2022, 8, 4, 10, 0),
 //     EndTime: new Date(2022, 8, 7, 12, 30)
 //   },{
 //     Id: 5,
 //     Subject: 'Paris',
 //     Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     StartTime: new Date(2022, 8, 1, 10, 0),
 //     EndTime: new Date(2022, 8, 21, 12, 30)
 //   },{
 //     Id: 6,
 //     Subject: 'London',
 //     Description:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     des:'Entering on airport at 9.00am after. After beeing on the main stage.We will visit Triuphal gate',
 //     StartTime: new Date(2022, 8, 2, 10, 0),
 //     EndTime: new Date(2022, 8, 22, 12, 30)
 //   }
//]


//};

  constructor(private accountService: AccountService,
    private adventureReservationService: AdventureReservationService
    ) {
       // this.setAll(this.accountService.currentUser.username);
      // this.test = this.setAll()
  }

  ngOnInit(): void {

    this.username = this.accountService.currentUser.username;
     //   this.setAll()
     this.getTest()
    }
setAll():void{

    this.getDataAData2(this.username,this.test)


}


  getDataAData2(username:string, data2:object[]):void {
    this.adventureReservationService.getAllReservations(username).subscribe((data) => {
      console.log(data)
      data2 =this.getData(data)
      this.test=data2
      console.log(this.test)
    });

}

getData(podaci: AdventureReservationDTO[]):any[]{

  let rval : object[]=[]

   console.log(podaci)

 // console.log(podaci.length)

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
