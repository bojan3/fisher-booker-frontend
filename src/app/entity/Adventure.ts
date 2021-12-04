import { Address } from "./Address";

export class Adventure{
    id: number;
    name: string;
    description: string;
    instructor_bio: string;
    address: Address;
    price: number;
    capacity:number;


    constructor(id: number, name: string, description: string, address: Address,price:number,capacity:number,instructor_bio: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.price=price;
        this.instructor_bio=instructor_bio;
        this.capacity=capacity;
    }
}






