import { CottageDTO } from "./CottageDTO";
import { Option } from "../Option";

export class CottageReservationDTO{
  id: number;
  startDate: Date;
  endDate: Date;
  capacity: number;
  price: number;
  cottageDTO: CottageDTO;
  canCancel: boolean;
  isFinished: boolean;
  cottageOption: Option;

  constructor(id: number, startDate: Date, endDate: Date,capacity: number, price: number, cottageDTO: CottageDTO, canCancel: boolean, isFinished: boolean, cottageOption: Option){
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.capacity = capacity;
    this.price = price;
    this.canCancel = canCancel;
    this.cottageDTO = cottageDTO;
    this.isFinished = isFinished;
    this.cottageOption = cottageOption;
  }
}
