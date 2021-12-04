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
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;
    
    this.authService.login(this.form.value)
      .subscribe(data => {
          this.accountService.getMyInfo().subscribe();
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
        });
  }

}
