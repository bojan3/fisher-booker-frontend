import { Component, Input, OnInit } from '@angular/core';
import { DeleteAccount } from 'src/app/entity/DeleteAccount';
import { DeleteaccountService } from 'src/app/services/deleteaccount.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {

  constructor(private deleteaccService : DeleteaccountService) { }

  @Input()
  deleteaccount !: DeleteAccount;

  ngOnInit(): void {
  
  }


  delete(id:number):void{this.deleteaccService.delete(id);}
  verify(id:number):void{this.deleteaccService.verify(id);}

}