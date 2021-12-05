import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entity/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[]=[];

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
    
    this.ClientService.getAllClients().subscribe((clients) => {
      console.log(clients);  
      this.clients = clients
    
    });

  }
}