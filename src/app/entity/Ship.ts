import {Address} from "./Address";
import { Rule } from "./Rule";

export class Ship{
  id: number;
  name: string;
  length: number;
  description: string;
  averageMark: number;
  rentPrice: number;
  engineNumber: number;
  enginePower: number;
  maxSpeed: number;
  capacity: number;
  cancelRate: number;
  shipSuperDeals: SuperDeal[];
  rules: Rule[];
  navigationEquipments: NavigationEquipment[];
  fishingEquipments: FishingEquipment[];
  availabilityPeriod: AvailabilityPeriod = new AvailabilityPeriod(0, new Date(), new Date());
  shipPictures: Image[];
  shipOptions: Option[];

  constructor(id: number, name: string, type: ShipType, length: number, address: Address, description: string,
    averageMark: number, rentPrice: number, engineNumber: number, enginePower: number,
    maxSpeed: number, capacity: number, cancelRate: number, shipSuperDeal: SuperDeal[],
    rules: Rule[], navigationEquipment: NavigationEquipment[], fishingEquipment: FishingEquipment[],
    availabilityPeriod: AvailabilityPeriod, shipPictures: Image[], shipOptions: Option[]) {
    this.id = id;
    this.name = name;
    this.length = length;
    this.description = description;
    this.averageMark = averageMark;
    this.rentPrice = rentPrice;
    this.engineNumber = engineNumber;
    this.enginePower = enginePower;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.cancelRate = cancelRate;
    this.shipSuperDeals = shipSuperDeal;
    this.rules = rules;
    this.navigationEquipments = navigationEquipment;
    this.fishingEquipments = fishingEquipment;
    this.availabilityPeriod = availabilityPeriod;
    this.shipPictures = shipPictures;
    this.shipOptions = shipOptions;
  }

}
