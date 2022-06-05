import { Adventure } from "../Adventure";
import { Option } from "../Option";

export class AdventureReservationDTO {

  id: number;
  startDate: Date;
  endDate: Date;
  capacity: number;
  price: number;
  adventureDTO: Adventure;
  canCancel: boolean;
  isFinished: boolean;
  adventureOption: Option

  constructor(id: number, startDate: Date, endDate: Date,capacity: number, price: number, adventureDTO: Adventure, canCancel: boolean, isFinished: boolean, adventureOption: Option){
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.capacity = capacity;
    this.price = price;
    this.canCancel = canCancel;
    this.adventureDTO = adventureDTO;
    this.isFinished = isFinished;
    this.adventureOption = adventureOption;
  }

}
