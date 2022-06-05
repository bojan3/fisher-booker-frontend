import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {


  constructor(private accountService : AccountService) { }

  requests: Account[]=[];


  ngOnInit(): void {
    this.accountService.getAllUnverified().subscribe((requests) => (this.requests = requests))
    console.log(this.requests);
  
  }}
