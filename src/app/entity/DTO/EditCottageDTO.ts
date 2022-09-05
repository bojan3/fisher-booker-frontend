import { Address } from "../Address";
import { AvailabilityPeriod } from "../AvailabilityPeriod";
import { Room } from "../Room";
import { Rule } from "../Rule";
import { Option } from "../Option";

export class EditCottageDTO {
    id: number;
    name: string;
    description: string;
    address: Address;
    pricePerDay: number;
    rooms: Room[];
    rules: Rule[];
    availabilityPeriod: AvailabilityPeriod;
    cottageOptions: Option[];

    constructor(id: number = 0, name: string = '', description: string = '', address: Address = new Address(0, '', '', '', ''),
        price_per_day: number = 0, room: Room[] = [], rule: Rule[] = [],
        availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(), cottageOptions: Option[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.rooms = room;
        this.rules = rule;
        this.availabilityPeriod = availabilityPeriod;
        this.cottageOptions = cottageOptions;
    }
}
