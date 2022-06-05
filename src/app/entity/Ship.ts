import { Address } from "./Address";
import { AvailabilityPeriod } from "./AvailabilityPeriod";
import { FishingEquipment } from "./FishingEquipment";
import { NavigationEquipment } from "./NavigationEquipment";
import { Rule } from "./Rule";
import { Option } from "./Option";
import { SuperDeal } from "./SuperDeal";
import { Image } from "./Image";
import { ShipType } from "./ShipType";
import { R3Identifiers } from "@angular/compiler";

export class Ship {
  id: number;
  name: string;
  type: ShipType;
  length: number;
  address: Address
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
  cottagePictures: Image[];
  shipOptions: Option[];

  constructor(id: number, name: string, type: ShipType, length: number, address: Address, description: string,
    averageMark: number, rentPrice: number, engineNumber: number, enginePower: number,
    maxSpeed: number, capacity: number, cancelRate: number, shipSuperDeal: SuperDeal[],
    rules: Rule[], navigationEquipment: NavigationEquipment[], fishingEquipment: FishingEquipment[],
    availabilityPeriod: AvailabilityPeriod, cottagePictures: Image[], shipOptions: Option[]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.length = length;
    this.address = address;
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
    this.cottagePictures = cottagePictures;
    this.shipOptions = shipOptions;
  }
  
}
