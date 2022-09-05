import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { NewAdminComponent } from '../new-admin/new-admin.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  income!:string;
  newIncome!:string;

  adminservice!:AdminService;
  
  entities = [['Cottage owners', '../../assets/images/cottage_owner.png','cottage_owners'], ['Fishing instructors', '../../assets/images/fishing_instructor.png','instructors'],
   ['Ship owners', '../../assets/images/ship_owner.png','ship_owners'], ['Clients', '../../assets/images/client.png','clients'],
    ['Cottages', '../../assets/images/cottage.png','cottages'], ['Adventures', '../../assets/images/adventure.png','adventures'],
     ['Ships', '../../assets/images/ship.png','ships'],['Account requests','../../assets/images/request.png','requests'],['Delete account requests','../../assets/images/x.jpg','deleteaccounts'],
    ['Reviews','../../assets/images/review.png','reviews'],['Appeals','../../assets/images/dislike.png','appeals'],['Business report','../../assets/images/bussines.png','business-report'],
    ['Reservation reviews','../../assets/images/reservation_review.png','reservation_reviews']];
     
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
    this.adminservice.setNewIncome(newIncome).subscribe();
  }




}
