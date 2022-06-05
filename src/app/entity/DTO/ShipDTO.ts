import { Address } from "../Address";

export class ShipDTO{
    id: number;
    name: string;
    shipType: string;
    length: number;
    description: string;
    averageMark: number;
    rentPrice: number;
    engineNumber: number;
	enginePower: number;
	maxSpeed: number;
	capacity: number;
	cancelRate: number;

    constructor(id: number, name: string, shipType: string, length: number, description: string, rentPrice: number,
         engineNumber: number, enginePower: number, maxSpeed: number, averageMark: number, capacity: number, cancelRate: number){
        this.id = id;
        this.name = name;
        this.shipType = shipType;
        this.length = length;
        this.description = description;
        this.rentPrice = rentPrice;
        this.averageMark = averageMark;
        this.engineNumber = engineNumber;
        this.enginePower = enginePower;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
        this.cancelRate = cancelRate;
    }
}