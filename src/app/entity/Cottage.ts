import { Address } from "./Address";

export class Cottage{
    id: number;
    name: string;
    description: string;
    address: Address;
    price_per_day: number;
    averageMark: number;

    constructor(id: number, name: string, description: string, address: Address, price_per_day: number, averageMark: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.price_per_day = price_per_day;
        this.averageMark = averageMark;
    }
}
