import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

interface DisplayMessage {
  msgType: string;
  msgBody: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  title = 'Login';
  notification!: DisplayMessage | undefined;
  submitted = false;
  form!: FormGroup;
  returnUrl!: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private accountService: AccountService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
      this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      /*.subscribe((params: DisplayMessage) => {
        this.notification = params;
      });*/
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    this.notification = undefined;
    this.submitted = true;
    
    this.authService.login(this.form.value)
      .subscribe(data => {
          this.accountService.getMyInfo().subscribe(() => {
            //this.router.navigate([this.returnUrl]);
            this.profileNavigation();
          });
        },
        error => {
          this.submitted = false;
          this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
        });
  }

  profileNavigation(){
    console.log(this.accountService.currentUser.roles[0].name);
    switch(this.accountService.currentUser.roles[0].name){
      case 'ROLE_COTTAGE_OWNER': this.router.navigate(['/cottage_owner_profile']); break;
      case 'ROLE_SHIP_OWNER': this.router.navigate(['/ship_owner_profile']); break;
      case 'ROLE_CLIENT': this.router.navigate(['/client_profile']); break;
      case 'ROLE_INSTRUCTOR': this.router.navigate(['/instructor_profile']); break;
      case 'ROLE_ADMIN': this.router.navigate(['/admin_profile']); break;
      default: this.router.navigate(['/']);
    }
  }

}
