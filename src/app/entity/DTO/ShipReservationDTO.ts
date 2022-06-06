import { ShipDTO } from "./ShipDTO";
import { Option } from "../Option";

export class ShipReservationDTO{

  id: number;
  startDate: Date;
  endDate: Date;
  capacity: number;
  price: number;
  shipDTO: ShipDTO;
  canCancel: boolean;
  isFinished: boolean;
  shipOption: Option;

  constructor(id: number, startDate: Date, endDate: Date,capacity: number, price: number, shipDTO: ShipDTO, canCancel: boolean, isFinished: boolean, shipOption: Option){
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.capacity = capacity;
    this.price = price;
    this.canCancel = canCancel;
    this.shipDTO = shipDTO;
    this.isFinished = isFinished;
    this.shipOption = shipOption;
  }
}
