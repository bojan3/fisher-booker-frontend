import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  account!: Account;
  form!: FormGroup;
  editMode: boolean = false;

  constructor(private accountService: AccountService,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account) => (this.account = account));
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
    });
  }

  showForm(){
    this.editMode = true;
  }

  hideForm(){
    this.editMode = false;
  }

  /*onSubmit() {
    this.notification = undefined;
    this.submitted = true;

    this.authService.signup(this.form.value)
      .subscribe(data => {
        console.log(data);
        this.authService.login(this.form.value).subscribe(() => {
          this.accountService.getMyInfo().subscribe();
        });
        this.router.navigate([this.returnUrl]);
      },
        error => {
          this.submitted = false;
          console.log('Sign up error');
          this.notification = { msgType: 'error', msgBody: error['error'].message };
        });

  }*/

}
