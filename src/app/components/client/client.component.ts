import { Component,Input, OnInit } from '@angular/core';
import { Client } from 'src/app/entity/Client';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input()
  client!:Client


  constructor(private clientservice: ClientService) { }

  ngOnInit(): void {

   // console.log(this.client);
  }

  delete(id:number): void{
    this.clientservice.delete(id).subscribe();
    window.location.reload()


  }


}
