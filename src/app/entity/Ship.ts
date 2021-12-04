import {Address} from "./Address";

export class Ship{
  id: number;
  name: string;
  length: number;
  description: string;
  averageMark: number;
  rentPrice: number;
  engineNumber: number;
  enginePower: number;
  maxSpeed: number;
  capacity: number;
  cancelRate: number;

  constructor(id: number, name: string, length: number, description: string, averageMark: number, rentPrice: number, engineNumber: number, enginePower: number, maxSpeed: number, capacity: number, cancelRate: number){
    this.id = id;
    this.name = name;
    this.length = length;
    this.description = description;
    this.averageMark = averageMark;
    this.rentPrice = rentPrice;
    this.engineNumber = engineNumber;
    this.enginePower = enginePower;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.cancelRate = cancelRate;
  }

}
