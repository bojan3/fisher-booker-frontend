import { Address } from "../Address";
import { AvailabilityPeriod } from "../AvailabilityPeriod";
import { FishingEquipment } from "../FishingEquipment";
import { NavigationEquipment } from "../NavigationEquipment";
import { Rule } from "../Rule";
import { Option } from "../Option";
import { ShipType } from "../ShipType";

export class EditShipDTO {
    id: number;
    name: string;
    type: ShipType;
    length: number;
    address: Address
    description: string;
    rentPrice: number;
    engineNumber: number;
    enginePower: number;
    maxSpeed: number;
    capacity: number;
    cancelRate: number;
    rules: Rule[];
    navigationEquipments: NavigationEquipment[];
    fishingEquipments: FishingEquipment[];
    availabilityPeriod: AvailabilityPeriod;
    shipOptions: Option[];

    constructor(id: number = 0, name: string = '', type: ShipType = ShipType.Boat, length: number = 0,
        address: Address = new Address(0, '', '', '', ''), description: string = '',
        rentPrice: number = 0, engineNumber: number = 0, enginePower: number = 0,
        maxSpeed: number = 0, capacity: number = 0, cancelRate: number = 0,
        rules: Rule[] = [], navigationEquipment: NavigationEquipment[] = [],
        fishingEquipment: FishingEquipment[] = [],
        availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(0, new Date(), new Date()), shipOptions: Option[] = []) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.length = length;
        this.address = address;
        this.description = description;
        this.rentPrice = rentPrice;
        this.engineNumber = engineNumber;
        this.enginePower = enginePower;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
        this.cancelRate = cancelRate;
        this.rules = rules;
        this.navigationEquipments = navigationEquipment;
        this.fishingEquipments = fishingEquipment;
        this.availabilityPeriod = availabilityPeriod;
        this.shipOptions = shipOptions;
    }
}
