import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { CottageOption } from "./CottageOption";
import { CottagePicture } from "./CottagePicture";
import { CottageSuperDeal } from "./CottageSuperDeal";
import { Room } from "./Room";
import { Rule } from "./Rule";

export class Cottage{
    id: number;
    name: string;
    description: string;
    address: Address;
    pictures: CottagePicture[];
    pricePerDay: number;
    room: Room[];
    rule: Rule[];
    cottageSuperDeal: CottageSuperDeal[];
    availabilityPeriod: AvailabilityPeriod;
    cottageOption: CottageOption[];

    constructor(id: number, name: string, description: string, address: Address, price_per_day: number,
        pictures: CottagePicture[], room: Room[], rule: Rule[], cottageSuperDeal: CottageSuperDeal[],
        availabilityPeriod: AvailabilityPeriod, cottageOption: CottageOption[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.pictures = pictures;
        this.room = room;
        this.rule = rule;
        this.cottageSuperDeal = cottageSuperDeal;
        this.availabilityPeriod = availabilityPeriod;
        this.cottageOption = cottageOption;
    }
}