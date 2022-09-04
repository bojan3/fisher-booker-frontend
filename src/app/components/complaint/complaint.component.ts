import { Component, Input, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
import { Complaint } from 'src/app/entity/Complaint';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  @Input()
  complaint !: Complaint;

  constructor(private complaintService : ComplaintService) { }

  ngOnInit(): void {

  }

  respond(answer:string):void{
   let response = new Complaint(this.complaint.id, this.complaint.owner_username, this.complaint.owner_email,this.complaint.client, this.complaint.client_email, this.complaint.client_username, this.complaint.text, answer,  true,  this.complaint.ownerId, this.complaint.clientId)
   // id: number, owner_username : string, owner_email : string, client  : string, client_email    : string, client_username : string, text: string, answer  : string,  answered: Boolean,  ownerId : string, clientId : string
    //console.log(answer)
     this.complaintService.respond(response).subscribe();
     console.log(JSON.stringify(response))
    }
    

    delete(id:any):void{
        
      //this.reviewService.delete(id).subscribe();
     //this.reviewService.getAllReservationReviews();
    }


  }
