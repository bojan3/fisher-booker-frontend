import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { CottageOption } from "./CottageOption";
import { Image } from "./Image";
import { CottageSuperDeal } from "./CottageSuperDeal";
import { Room } from "./Room";
import { Rule } from "./Rule";

export class Cottage{
    id: number;
    name: string;
    description: string;
    address: Address;
    cottagePictures: Image[];
    pricePerDay: number;
    rooms: Room[];
    rules: Rule[];
    cottageSuperDeal: CottageSuperDeal[];
    availabilityPeriod: AvailabilityPeriod;
    cottageOption: CottageOption[];

    constructor(id: number, name: string, description: string, address: Address, price_per_day: number,
        cottagePictures: Image[], room: Room[], rule: Rule[], cottageSuperDeal: CottageSuperDeal[],
        availabilityPeriod: AvailabilityPeriod, cottageOption: CottageOption[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.cottagePictures = cottagePictures;
        this.rooms = room;
        this.rules = rule;
        this.cottageSuperDeal = cottageSuperDeal;
        this.availabilityPeriod = availabilityPeriod;
        this.cottageOption = cottageOption;
    }
}