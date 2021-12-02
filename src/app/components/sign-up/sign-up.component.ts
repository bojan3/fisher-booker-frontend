import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { takeUntil } from 'rxjs/operators';

interface DisplayMessage {
  msgType: string;
  msgBody: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title = 'Sign up';
  form!: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */

  returnUrl!: string;
  notification!: DisplayMessage | undefined;

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: DisplayMessage) => {
        this.notification = params;
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      firstname: [''],
      lastname: [''],
      email: ['']
    });
  }

  onSubmit(){
    /**
     * Innocent until proven guilty
     */
     this.notification = undefined;
     this.submitted = true;

     this.authService.signup(this.form.value)
       .subscribe(data => {
         console.log(data);
         this.authService.login(this.form.value).subscribe(() => {
           this.userService.getMyInfo().subscribe();
         });
         this.router.navigate([this.returnUrl]);
       },
         error => {
           this.submitted = false;
           console.log('Sign up error');
           this.notification = { msgType: 'error', msgBody: error['error'].message };
         });
  }
}
