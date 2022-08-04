export class SuperDeal {
    id: number;
    startDate: Date;
    discountedPrice: number;
    endDate: Date;
    capacity: number;

    constructor(id: number = 0, startDate: Date = new Date(), discountedPrice: number = 0,
        endDate: Date = new Date(), capacity: number = 0) {
        this.id = id;
        this.startDate = startDate;
        this.discountedPrice = discountedPrice;
        this.endDate = endDate;
        this.capacity = capacity;
    }
}