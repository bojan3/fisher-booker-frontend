import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cottage } from 'src/app/entity/Cottage';
import { Room } from 'src/app/entity/Room';
import { CottageService } from 'src/app/services/cottage.service';
import { EditCottageOptionsComponent } from '../edit-cottage-options/edit-cottage-options.component';
import { EditCottageSuperDealComponent } from '../edit-cottage-super-deal/edit-cottage-super-deal.component';
import { EditRoomsComponent } from '../edit-rooms/edit-rooms.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';

@Component({
  selector: 'app-add-cottage',
  templateUrl: './add-cottage.component.html',
  styleUrls: ['./add-cottage.component.css']
})

export class AddCottageComponent implements OnInit {

  @Input()
  cottage!: Cottage;
  form!: FormGroup;

  @ViewChild(EditRoomsComponent)
  editRoomsComponent!: EditRoomsComponent;
  @ViewChild(EditRulesComponent)
  editRulesComponent!: EditRoomsComponent;
  @ViewChild(EditCottageOptionsComponent)
  editCottageOptionsComponent!: EditCottageOptionsComponent;
  @ViewChild(EditCottageSuperDealComponent)
  editCottageSuperDealComponent!: EditCottageSuperDealComponent;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private cottageService: CottageService) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        if(params.id){
          this.cottageService.getById(params.id).subscribe((cottage) => {
            this.cottage = cottage;
            this.form = this.formBuilder.group({
              name: [this.cottage.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
              address: this.formBuilder.group({
                country: [this.cottage.address.country],
                city: [this.cottage.address.city],
                street: [this.cottage.address.street],
                number: [this.cottage.address.number]
              }),
              description: [this.cottage.description, Validators.compose([Validators.minLength(3), Validators.maxLength(300)])],
              pricePerDay: [this.cottage.pricePerDay],
              availabiltyPeriod: this.formBuilder.group({
                startDate: [this.cottage.availabilityPeriod.startDate],
                endDate: [this.cottage.availabilityPeriod.endDate]
              })
            })
          });
        }
      });
  }

  onSubmit(){
    this.cottage.rooms = this.editRoomsComponent.form.value;
    this.cottage.rules = this.editRulesComponent.form.value;
    this.cottage.cottageOptions = this.editCottageOptionsComponent.form.value;
    this.cottage.cottageSuperDeal = this.editCottageSuperDealComponent.form.value;
    this.cottageService.saveCottage(this.cottage);
    console.log(this.cottage);
  }

  cancelChanges(){

  }

  roomsChanged(event: any){
    console.log(event);
    
    this.cottage.rooms = event;
  }

}
