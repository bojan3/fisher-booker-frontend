 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';
import { StatusName} from 'src/app/entity/StatusName';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  account!: Account;
  form!: FormGroup;
  editMode: boolean = false;
  showTable: boolean =  false;
  isREGULAR: boolean = false;
  isBRONZE: boolean = false;
  isSILVER: boolean = false;
  isGOLD: boolean = false;
  isDIAMOND: boolean = false;


  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder) {
    //  this.accountService.getMyInfo().subscribe((account) =>{
    //    this.account = account;
    //    if (this.account.status.name.toString()=="DIAMOND")
    //      this.isDIAMOND=true;
    //    if (this.account.status.name.toString()=="GOLD")
    //      this.isGOLD=true;
    //    if (this.account.status.name.toString()=="SILVER")
    //      this.isSILVER=true;
    //    if (this.account.status.name.toString()=="BRONZE")
    //      this.isBRONZE=true;
    //    if (this.account.status.name.toString()=="REGULAR")
    //      this.isREGULAR=true;

    //  });

     }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account) => {
      this.account = account;
      this.showTable = true;
    });
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
    // this.form = this.formBuilder.group({
    //   username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
    //   password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
    //   firstname: [''],
    //   lastname: [''],
    //   email: [''],
    //   phoneNumber: [''],
    //   address: this.formBuilder.group({
    //     country: [''],
    //     city: [''],
    //     street: [''],
    //     number: ['']
    //   }),
    // });
  }

  showForm(){
    this.editMode = true;
//    if (this.account.status.name==StatusName.REGULAR)
//        this.isREGULAR=true;
//  if (this.account.status.name===StatusName.BRONZE)
//    this.isBRONZE=true;
//  if (this.account.status.name===StatusName.SILVER)
//   this.isSILVER=true;
//  if (this.account.status.name===StatusName.GOLD)
//   this.isGOLD=true;
//  if (this.account.status.name==StatusName.DIAMOND)
//   this.isDIAMOND=true;
//
//   console.log(this.isREGULAR)
//    console.log(this.isBRONZE)
//    console.log(this.isSILVER)
//    console.log(this.isGOLD)
//    console.log(this.isDIAMOND)


  }

  hideForm(){
    this.editMode = false;
    console.log(this.account);
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
