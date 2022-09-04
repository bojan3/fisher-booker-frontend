import { Component, Input, OnInit } from '@angular/core';
import { CottageDTO } from '../../entity/DTO/CottageDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { CottageService } from 'src/app/services/cottage.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cottages',
  templateUrl: './cottages.component.html',
  styleUrls: ['./cottages.component.css']
})
export class CottagesComponent implements OnInit {

  @Input()
  forCottageOwner: boolean = false;
  @Input()
  forClientSubscriptions: boolean = false;
  dateInput!: Date;
  cottages: CottageDTO[] = [];
  sortByGroup!: FormGroup;
  orderGroup!: FormGroup;
  cottageLocations: string[] = [];
  searchForm!: FormGroup;
  grades: number[] = [1, 2, 3, 4, 5];

  constructor(private cottageService: CottageService,
              private clientService: ClientService,
              private accountService: AccountService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      startDate: [],
      endDate: [],
      locationCity: [],
      minGrade: [],
      // minCapacity: []
    })

    this.sortByGroup = new FormGroup({
      'sortByRadio' : new FormControl()
    });

    this.orderGroup = new FormGroup({
      'orderRadio' : new FormControl()
    });

    this.orderGroup.patchValue({orderRadio: 'ASC'});

    this.cottageService.getCottageLocaitons().subscribe( (locations) => (this.cottageLocations = locations) )

    if (this.forCottageOwner) {
      this.cottageService.getAllCottagesByOwner().subscribe((cottages) => (this.cottages = cottages));
    } if(this.forClientSubscriptions){
      this.clientService.getCottageSubscriptions(this.accountService.currentUser.id).subscribe((cottages) => (this.cottages = cottages));
    }
    else {
      this.cottageService.getAllCottages().subscribe((cottages) => (this.cottages = cottages));
    }
  }

  getSorted(){
   this.cottageService.getAllCottages(this.sortByGroup.value.sortByRadio, this.orderGroup.value.orderRadio).subscribe((cottages) => (this.cottages = cottages));
  }

  notClientSubscriptions(): boolean {
    return !this.forClientSubscriptions;
  }

  onSearch(){
    console.log(this.searchForm.value)
    this.cottageService.search(this.searchForm.value).subscribe((cottages) => (this.cottages = cottages));
  }

}
