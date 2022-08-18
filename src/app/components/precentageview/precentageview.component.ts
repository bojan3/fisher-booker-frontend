import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-precentageview',
  templateUrl: './precentageview.component.html',
  styleUrls: ['./precentageview.component.css']
})
export class PrecentageviewComponent implements OnInit {
  income!:string;
  newIncome!:string;
  adminservice!:AdminService;
   
    // form1!: FormGroup;

  constructor(adminservice:AdminService) {
    this.adminservice=adminservice;
   }
  


  ngOnInit(): void {
      
      this.adminservice.getCurrentIncome().subscribe((income) =>{
        this.income = income;    
      });
  }


  setNewIncome(newIncome: string): void{
    console.log("New income:"+newIncome)
    this.adminservice.setNewIncome(newIncome).subscribe();
    window.location.reload();

    
  }
}