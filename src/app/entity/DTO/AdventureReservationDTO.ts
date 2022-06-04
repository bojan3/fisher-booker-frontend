import { Adventure } from "../Adventure";

export class AdventureReservationDTO {

  id: number;
  startDate: Date;
  endDate: Date;
  capacity: number;
  price: number;
  adventure: Adventure;
  canCancel: boolean;
  isFinished: boolean;

  constructor(id: number, startDate: Date, endDate: Date,capacity: number, price: number, adventure: Adventure, canCancel: boolean, isFinished: boolean){
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.capacity = capacity;
    this.price = price;
    this.canCancel = canCancel;
    this.adventure = adventure;
    this.isFinished = isFinished;
  }
}
