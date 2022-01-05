import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Room } from 'src/app/entity/Room';

@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.component.html',
  styleUrls: ['./edit-rooms.component.css']
})
export class EditRoomsComponent implements OnInit {

  @Input()
  rooms!: Room[];
  @Output()
  roomsChanged = new EventEmitter<Room[]>();

  form!: FormGroup;
  roomsForm!: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rooms: this.formBuilder.array( this.createRooms() )
    });
  }

  createRooms(){
    let formatted: FormGroup[] = [];
    this.rooms.forEach((room) => {
      formatted.push(this.createRoom(room.label, room.numOfBeds));
    })
    return formatted;
  }

  createRoom(defaultLabel: string, defaultBeds: number): FormGroup {
    return this.formBuilder.group({
      label: [defaultLabel],
      numOfBeds: [defaultBeds],
    });
  }

  addRoom(): void {
    this.roomsForm = this.form.get('rooms') as FormArray;
    this.roomsForm.push(this.createRoom('', 0));
    this.rooms.push(new Room('', 0));
  }

  removeRoom(i: number): void{
    this.roomsForm = this.form.get('rooms') as FormArray;
    this.roomsForm.removeAt(i);
    this.rooms = this.rooms.filter((room, index) => index != i)
  }

  onSubmit(){
    this.roomsChanged.emit(this.rooms);
  }

}
