import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  title = 'Sign up';
  form!: FormGroup;
  submitted = false;
//notification: DisplayMessage | undefined;

  returnUrl!: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input()
  account !: Account;
  
  constructor(private accountService: AccountService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

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
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      firstname: [''],
      lastname: [''],
      email: [''],
      phoneNumber: [''],
      address: this.formBuilder.group({
        country: [''],
        city: [''],
        street: [''],
        number: ['']
      }),
    //  role: []
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    this.submitted = true;
    
   // account : Account;
    
    this.accountService.newAdmin(this.form.value).subscribe();
       

   // this.authService.signup(this.form.value)
   //   .subscribe(data => {
   //     console.log(data);
   //     this.authService.login(this.form.value).subscribe(() => {
   //       this.accountService.getMyInfo().subscribe();
   //     });
   //     this.router.navigate([this.returnUrl]);
   //   },
   //     error => {
   //       this.submitted = false;
  //        console.log('REGISTER error');
       //   this.notification = { msgType: 'error', msgBody: error['error'].message };
   //     });



  }
}
