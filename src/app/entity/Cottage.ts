import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { Image } from "./Image";
import { Room } from "./Room";
import { Rule } from "./Rule";
import { SuperDeal } from "./SuperDeal";
import { Option } from "./Option";

export class Cottage {
    id: number = 0;
    name: string = '';
    description: string = '';
    address: Address = new Address(0, '', '', '', '');
    cottagePictures: Image[];
    pricePerDay: number;
    rooms: Room[];
    rules: Rule[];
    cottageSuperDeals: SuperDeal[];
    availabilityPeriod: AvailabilityPeriod;
    cottageOptions: Option[];
    averageMark: number;
    cottageImages: Image[];

    constructor(id: number = 0, name: string = '', description: string = '', address: Address = new Address(0, '', '', '', ''), price_per_day: number = 0,
        pictures: Image[] = [], averageMark: number = 0, room: Room[] = [], rule: Rule[] = [], cottageSuperDeals: SuperDeal[] = [],
        availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(), cottageOptions: Option[] = [], cottageImages: Image[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.cottagePictures = pictures;
        this.rooms = room;
        this.rules = rule;
        this.cottageSuperDeals = cottageSuperDeals;
        this.availabilityPeriod = availabilityPeriod;
        this.cottageOptions = cottageOptions;
        this.averageMark = averageMark;
        this.cottageImages = cottageImages;
    }
}
