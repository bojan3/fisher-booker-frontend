import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TwoStringsDTO } from 'src/app/entity/DTO/TwoStringsDTO';
import { BusinessReportService } from 'src/app/services/business-report.service';

@Component({
  selector: 'app-business-report',
  templateUrl: './business-report.component.html',
  styleUrls: ['./business-report.component.css']
})
export class BusinessReportComponent implements OnInit {
  today!:string;
  date!:string;

  totalIncome : any ="0";
  totalReservations : any = "0";
  adventureReservations : any = "0";
  cottageReservations : any = "0";
  shipReservations : any = "0";
  adventureIncome : any = "0";
  cottageIncome : any = "0";
  shipIncome : any = "0";
  form!: FormGroup;



  constructor(private reportService: BusinessReportService, private formBuilder: FormBuilder) {
    var today = new Date();
    this.date = today. getFullYear()+'-'+(today. getMonth()+1)+'-'+today. getDate();
   }

  ngOnInit(): void { 
    var today = new Date();
    var date = today. getFullYear()+'-'+(today. getMonth()+1)+'-'+today. getDate();
  }

  search(start:string,end:string):void{
    var data = {start:start, end:end};
    const category: TwoStringsDTO = new TwoStringsDTO(start,end);
    console.log(category);


    this.reportService.GetIncome(category)
    .subscribe(
      response =>{
      this.totalIncome= response.body
      }
    );

    this.reportService.GetAdventureIncome(category)
    .subscribe(
      response =>{
      this.adventureIncome= response.body
      }
    );

    this.reportService.GetShipIncome(category)
    .subscribe(
      response =>{
      this.shipIncome= response.body
      }
    );

    this.reportService.GetCottageIncome(category)
    .subscribe(
      response =>{
      this.cottageIncome= response.body
      }
    );


    this.reportService.CountTotalReservations(category)
    .subscribe(
      response =>{
      this.totalReservations= response.body
      }
    );

    this.reportService.CountAdventureReservations(category)
    .subscribe(
      response =>{
      this.adventureReservations= response.body
      }
    );

    this.reportService.CountShipReservations(category)
    .subscribe(
      response =>{
      this.shipReservations= response.body
      }
    );

    this.reportService.CountCottageReservations(category)
    .subscribe(
      response =>{
      this.cottageReservations= response.body
      }
    );



  }



}
