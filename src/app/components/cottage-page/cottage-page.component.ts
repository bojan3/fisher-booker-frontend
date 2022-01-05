import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, RouteConfigLoadEnd} from '@angular/router';
import { Cottage } from 'src/app/entity/Cottage';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-cottage-page',
  templateUrl: './cottage-page.component.html',
  styleUrls: ['./cottage-page.component.css']
})
export class CottagePageComponent implements OnInit {

  id: string = '';
  cottage!: Cottage;
  form!: FormGroup;
  formVisible: boolean = false;

  constructor(private route: ActivatedRoute, private cottageService: CottageService, private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.cottageService.getById(this.id).subscribe((cottage) => {
        this.cottage = cottage;
      });
    })
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: [this.cottage.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      address: this.formBuilder.group({
        country: [this.cottage.address.country],
        city: [this.cottage.address.city],
        street: [this.cottage.address.street],
        number: [this.cottage.address.number]
      }),
      description: [this.cottage.description, Validators.compose([Validators.minLength(3), Validators.maxLength(300)])],
      pricePerDay: [this.cottage.pricePerDay]
    })
  }

  showForm(){
    this.formVisible = true;
    this.buildForm();
  }

  onSubmit(){

  }

  cancelChanges(){
    this.formVisible = false;
  }

  getNumberOfRoomsAndBeds(){
    if(this.cottage){
      let rooms = this.cottage.rooms;
      let output = `Broj soba: ${rooms.length} (`;
      rooms.forEach((room) => {
        if(room.numOfBeds === 1){
          output += room.numOfBeds + ' krevet, ';
        } else{
          output += room.numOfBeds + ' kreveta, ';
        }
      })
      return this.removeLastCommaAndSpace(output) + ')';
    }
    return '';
  }

  rulesToString(){
    if(this.cottage){
      let rules = this.cottage.rules;
      let output = '';
      rules.forEach(rule => {
        output += rule.description + ', ';
      });
      
      return this.removeLastCommaAndSpace(output);
    }
    return '';
  }

  formatDate(date: Date){
    return date;
  }

  removeLastCommaAndSpace(string: string){
    return string.slice(0, string.length-2);
  }

}
