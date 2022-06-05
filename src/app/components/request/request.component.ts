import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Input()
  request !: Account;

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    
  }

 verify(id:any):void{
  this.accountService.verify(id).subscribe();
  window.location.reload()
 }

delete(id:number):void{
  this.accountService.delete(id).subscribe();
  window.location.reload()
}


}
