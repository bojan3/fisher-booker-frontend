import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cottage } from 'src/app/entity/Cottage';
import { Room } from 'src/app/entity/Room';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-add-cottage',
  templateUrl: './add-cottage.component.html',
  styleUrls: ['./add-cottage.component.css']
})

export class AddCottageComponent implements OnInit {

  @Input()
  cottage!: Cottage;
  form: FormGroup = this.formBuilder.group({});
  rooms!: FormArray;

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
              rooms: this.formBuilder.array( this.createRooms() )
            })

          });
        }
      });


  }

  onSubmit(){
    console.log(this.form.value);

  }

  cancelChanges(){
    
  }

  addRoom(): void {
    this.rooms = this.form.get('rooms') as FormArray;
    this.rooms.push(this.createRoom('', 0));
    this.cottage.rooms.push(new Room('', 0));
  }

  removeRoom(i: number): void{
    this.rooms = this.form.get('rooms') as FormArray;
    this.rooms.removeAt(i);
    this.cottage.rooms = this.cottage.rooms.filter((room, index) => index != i)
    console.log(this.cottage.rooms);
    
  }

  createRooms(){
    let rooms = this.cottage.rooms;
    let formatted: FormGroup[] = [];
    rooms.forEach((room) => {
      formatted.push(this.createRoom(room.label, room.numOfBeds));
    })
    console.log(formatted);
    return formatted;
  }

  createRoom(defaultLabel: string, defaultBeds: number): FormGroup {
    return this.formBuilder.group({
      label: [defaultLabel],
      numOfBeds: [defaultBeds],
    });
  }

}
