import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { Image } from "./Image";
import { Rule} from "./Rule";

export class Adventure{
    id: number = 0;
    name: string = '';
    description: string = '';
    address: Address = new Address(0, '', '', '', '');
    adventurePictures: Image[];
    pricePerDay: number = 0;
    rules: Rule[];
    availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(0, new Date(), new Date());
    averageMark: number;

    constructor(id: number, name: string, description: string, address: Address, price_per_day: number,
        pictures: Image[], averageMark: number, rule: Rule[],
        availabilityPeriod: AvailabilityPeriod){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.adventurePictures = pictures;
        this.rules = rule;
        this.availabilityPeriod = availabilityPeriod;
        this.averageMark = averageMark;
    }
}






