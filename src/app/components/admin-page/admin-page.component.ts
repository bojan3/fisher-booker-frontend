import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewAdminComponent } from '../new-admin/new-admin.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  entities = [['Cottage owners', '../../assets/images/cottage_owner.png','cottage_owners'], ['Fishing instructors', '../../assets/images/fishing_instructor.png','instructors'],
   ['Ship owners', '../../assets/images/ship_owner.png','ship_owners'], ['Clients', '../../assets/images/client.png','clients'],
    ['Cottages', '../../assets/images/cottage.png','cottages'], ['Adventures', '../../assets/images/adventure.png','adventures'],
     ['Ships', '../../assets/images/ship.png','ships'],['Account requests','../../assets/images/request.png','requests'],['Delete account requests','../../assets/images/x.jpg','deleteaccounts'],
    ['Reviews','../../assets/images/review.png','reviews'],['Complaints','../../assets/images/dislike.png','complaints'],['Business report','../../assets/images/bussines.png','business-report']];
     
    // form1!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
