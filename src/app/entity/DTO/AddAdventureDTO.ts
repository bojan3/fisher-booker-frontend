import { Address } from "../Address";
import { AvailabilityPeriod } from "../AvailabilityPeriod";
import { Room } from "../Room";
import { Rule } from "../Rule";
import { Option } from "../Option"

export class AddAdventureDTO {
    name: string;
    description: string;
    address: Address;
    pricePerDay: number;
    //rooms: Room[];
    rules: Rule[];
   // availabilityPeriod: AvailabilityPeriod;
    adventureOptions: Option[];

    constructor(name: string = '', description: string = '', address: Address = new Address(0, '', '', '', ''),
        price_per_day: number = 0, room: Room[] = [], rule: Rule[] = [],
        availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(), adventureOptions: Option[] = []) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
       // this.rooms = room;
        this.rules = rule;
       // this.availabilityPeriod = availabilityPeriod;
        this.adventureOptions = adventureOptions;
    }
}
