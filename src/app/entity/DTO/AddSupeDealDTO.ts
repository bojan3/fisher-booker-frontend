export class AddSuperDealDTO {
    startDate: Date;
    discountedPrice: number;
    endDate: Date;
    capacity: number;
    realEstateId: number;
    options: number[];

    constructor(startDate: Date = new Date(), discountedPrice: number = 0,
        endDate: Date = new Date(), capacity: number = 0, realEstateId: number = 0, options: number[] = []) {
        this.startDate = startDate;
        this.discountedPrice = discountedPrice;
        this.endDate = endDate;
        this.capacity = capacity;
        this.realEstateId = realEstateId;
        this.options = options; 
    }
}