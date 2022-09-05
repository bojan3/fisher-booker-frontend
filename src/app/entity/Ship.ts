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
import { EditShipDTO } from "./DTO/EditShipDTO";

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
  shipImages: Image[];
  shipOptions: Option[];

  constructor(id: number, name: string, type: ShipType, length: number, address: Address, description: string,
    averageMark: number, rentPrice: number, engineNumber: number, enginePower: number,
    maxSpeed: number, capacity: number, cancelRate: number, shipSuperDeal: SuperDeal[],
    rules: Rule[], navigationEquipment: NavigationEquipment[], fishingEquipment: FishingEquipment[],
    availabilityPeriod: AvailabilityPeriod, shipPictures: Image[], shipOptions: Option[]) {
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
    this.shipImages = shipPictures;
    this.shipOptions = shipOptions;
  }

  toEditShipDTO() {
    let editShip = new EditShipDTO();
    editShip.id = this.id;
    editShip.name = this.name;
    editShip.type = this.type;
    editShip.length = this.length;
    editShip.address = this.address;
    editShip.description = this.description;
    editShip.rentPrice = this.rentPrice;
    editShip.engineNumber = this.engineNumber;
    editShip.enginePower = this.enginePower;
    editShip.maxSpeed = this.maxSpeed;
    editShip.capacity = this.capacity;
    editShip.cancelRate = this.cancelRate;
    editShip.rules = this.rules
    editShip.navigationEquipments = this.navigationEquipments;
    editShip.fishingEquipments = this.fishingEquipments;
    editShip.availabilityPeriod = this.availabilityPeriod;
    editShip.shipOptions = this.shipOptions;
    return editShip;
  }
  
}
