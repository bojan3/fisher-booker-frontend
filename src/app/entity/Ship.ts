import {Address} from "./Address";

export class Ship{
  id: number;
  name: string;
  length: number;
  description: string;
  average_mark: number;
  rent_price: number;
  engine_number: number;
  engine_power: number;
  max_speed: number;
  capacity: number;
  cancel_rate: number;

  constructor(id: number, name: string, length: number, description: string, average_mark: number, rent_price: number, engine_number: number, engine_power: number, max_speed: number, capacity: number, cancel_rate: number){
    this.id = id;
    this.name = name;
    this.length = length;
    this.description = description;
    this.average_mark = average_mark;
    this.rent_price = rent_price;
    this.engine_number = engine_number;
    this.engine_power = engine_power;
    this.max_speed = max_speed;
    this.capacity = capacity;
    this.cancel_rate = cancel_rate;
  }

}
