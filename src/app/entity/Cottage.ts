import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { CottageOption } from "./CottageOption";
import { Image } from "./Image";
import { CottageSuperDeal } from "./CottageSuperDeal";
import { Room } from "./Room";
import { Rule } from "./Rule";

export class Cottage{
    id: number = 0;
    name: string = '';
    description: string = '';
    address: Address = new Address(0, '', '', '', '');
    cottagePictures: Image[];
    pricePerDay: number = 0;
    rooms: Room[];
    rules: Rule[];
    cottageSuperDeal: CottageSuperDeal[];
    availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(0, new Date(), new Date());
    cottageOptions: CottageOption[];
    averageMark: number;

    constructor(id: number, name: string, description: string, address: Address, price_per_day: number,
        pictures: Image[], averageMark: number, room: Room[], rule: Rule[], cottageSuperDeal: CottageSuperDeal[],
        availabilityPeriod: AvailabilityPeriod, cottageOptions: CottageOption[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.cottagePictures = pictures;
        this.rooms = room;
        this.rules = rule;
        this.cottageSuperDeal = cottageSuperDeal;
        this.availabilityPeriod = availabilityPeriod;
        this.cottageOptions = cottageOptions;
        this.averageMark = averageMark;
    }
}
