import { Address } from "./Address";

export class Cottage{
    id: number;
    name: string;
    description: string;
    address: Address;
    constructor(id: number, name: string, description: string, address: Address){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
}