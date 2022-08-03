import { Component, OnInit } from '@angular/core';
import { DeleteAccount } from 'src/app/entity/DeleteAccount';
import { DeleteaccountService } from 'src/app/services/deleteaccount.service';

@Component({
  selector: 'app-deleteaccounts',
  templateUrl: './deleteaccounts.component.html',
  styleUrls: ['./deleteaccounts.component.css']
})
export class DeleteaccountsComponent implements OnInit {

  constructor(private accountService : DeleteaccountService) { }

  requests: DeleteAccount[]=[];


  ngOnInit(): void {
    this.accountService.getAll().subscribe((requests) => (this.requests = requests))
    console.log(this.requests);
  
  }}