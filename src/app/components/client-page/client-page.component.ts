import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router
  ) { }

  mainEntities = [['Cottages', '../../assets/images/cottage.png', 'cottages'], ['Fishing  Instructor', '../../assets/images/fishing_instructor.png', 'fishing-instructors'],
  ['Ships', '../../assets/images/ship.png', 'ships']];

  historyEntities = [['Cottages', '../../assets/images/cottage.png', 'cottage-reservations'], ['Adventures', '../../assets/images/adventure.png', 'adventure-reservations'],
  ['Ships', '../../assets/images/ship.png', 'ship-reservations']]

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((user) => {
      if (user.role != 'ROLE_CLIENT') {
        this.authService.logout();
        this.router.navigate(['/logIn'])
      }
    }, (error) => {
      this.router.navigate(['/logIn'])
    })
  }

}
