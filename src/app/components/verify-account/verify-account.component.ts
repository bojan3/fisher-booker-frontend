import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SecureToken } from 'src/app/entity/SecureToken';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  token: string = '';
  returnUrl!: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.route.params.subscribe
      this.route.params.subscribe((param) => {
      this.token = param.token;
      console.log("id instruktora :" +this.token);
      });
      this.authService.verify_email(this.token)

    }

    verifyEmail(){
      this.authService.verify_email(this.token).subscribe();
    }

}
