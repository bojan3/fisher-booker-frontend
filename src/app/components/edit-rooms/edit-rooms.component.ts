import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/entity/Room';

@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.component.html',
  styleUrls: ['./edit-rooms.component.css']
})
export class EditRoomsComponent implements OnInit {

  @Input()
  rooms: Room[] = [];

  form!: UntypedFormGroup;
  roomsForm!: UntypedFormArray;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rooms: this.formBuilder.array( this.createRooms() )
    });
  }

  createRooms(){
    let formatted: UntypedFormGroup[] = [];
    this.rooms.forEach((room) => {
      formatted.push(this.createRoom(room.label, room.numOfBeds));
    })
    return formatted;
  }

  createRoom(defaultLabel: string, defaultBeds: number): UntypedFormGroup {
    return this.formBuilder.group({
      label: [defaultLabel, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
      numOfBeds: [defaultBeds],
    });
  }

  addRoom(): void {
    this.roomsForm = this.form.get('rooms') as UntypedFormArray;
    this.roomsForm.push(this.createRoom('', 0));
    this.rooms.push(new Room('', 0));
  }

  removeRoom(i: number): void{
    this.roomsForm = this.form.get('rooms') as UntypedFormArray;
    this.roomsForm.removeAt(i);
    this.rooms = this.rooms.filter((room, index) => index != i)
  }

}
