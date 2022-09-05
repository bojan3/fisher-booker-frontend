import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { Image } from "./Image";
import { Option } from "./Option";
import { Rule } from "./Rule";
import { SuperDeal } from "./SuperDeal";

export class AdventureDTO{
    id: number;
    name: string;
    description: string;
    instructor_bio: string;
    address: Address;
    price: number;
    capacity:number;
    averageMark: number;
    rules: Rule[];
    adventureSuperDeals: SuperDeal[];
    availabilityPeriod: AvailabilityPeriod;
    adventureOptions: Option[];
    adventureImages: Image[];



    constructor(id: number, name: string, description: string, address: Address,price:number,capacity:number,instructor_bio: string, average_mark:number, rule:Rule[]
        ,adventureSuperDeals: SuperDeal[], availabilityperiod: AvailabilityPeriod, adventureOptions : Option[]= [], adventureImages : Image[]  ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.price=price;
        this.instructor_bio=instructor_bio;
        this.capacity=capacity;
        this.averageMark = average_mark;
        this.price = price;
        this.rules = rule;
        this.adventureImages = adventureImages;
        this.adventureOptions = adventureOptions;
        this.adventureSuperDeals = adventureSuperDeals;
        this.availabilityPeriod = availabilityperiod;

    }
}