export class AddSuperDealDTO {
    id: number;
    startDate: Date;
    discountedPrice: number;
    endDate: Date;
    capacity: number;
    realEstateId: string;

    constructor(id: number = 0, startDate: Date = new Date(), discountedPrice: number = 0,
        endDate: Date = new Date(), capacity: number = 0, realEstateId: string = '') {
        this.id = id;
        this.startDate = startDate;
        this.discountedPrice = discountedPrice;
        this.endDate = endDate;
        this.capacity = capacity;
        this.realEstateId = realEstateId;
    }
}