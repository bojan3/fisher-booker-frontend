import { RealEstateType } from "../RealEstateType";
import { ReservationType } from "./ReservationType";

export class AddSuperDealDTO {
    startDate: Date;
    discountedPrice: number;
    endDate: Date;
    capacity: number;
    realEstateId: number;
    options: number[];
    type: ReservationType;

    constructor(startDate: Date = new Date(), discountedPrice: number = 0,
        endDate: Date = new Date(), capacity: number = 0, realEstateId: number = 0, options: number[] = [],
        type: ReservationType = ReservationType.COTTAGE) {
        this.startDate = startDate;
        this.discountedPrice = discountedPrice;
        this.endDate = endDate;
        this.capacity = capacity;
        this.realEstateId = realEstateId;
        this.options = options; 
        this.type = type;
    }
}