import { Address } from "../Address";
import { AvailabilityPeriod } from "../AvailabilityPeriod";
import { Room } from "../Room";
import { Rule } from "../Rule";
import { Option } from "../Option"

export class AddCottageDTO {
    name: string;
    description: string;
    address: Address;
    pricePerDay: number;
    rooms: Room[];
    rules: Rule[];
    availabilityPeriods: AvailabilityPeriod[];
    cottageOptions: Option[];
    imageName: string;

    constructor(name: string = '', description: string = '', address: Address = new Address(0, '', '', '', ''),
        price_per_day: number = 0, room: Room[] = [], rule: Rule[] = [],
        availabilityPeriods: AvailabilityPeriod[] = [], cottageOptions: Option[] = [], imageName: string = '') {
        this.name = name;
        this.description = description;
        this.address = address;
        this.pricePerDay = price_per_day;
        this.rooms = room;
        this.rules = rule;
        this.availabilityPeriods = availabilityPeriods;
        this.cottageOptions = cottageOptions;
        this.imageName = imageName;
    }
}
