export class CottageSuperDeal{
    id: number;
    startDate: Date;
    discountedPrice: number;
    endDate: Date;
    capacity: number;

    constructor(id: number, startDate: Date, discountedPrice: number,
        endDate: Date, capacity: number){
            this.id = id;
            this.startDate = startDate;
            this.discountedPrice = discountedPrice;
            this.endDate = endDate;
            this.capacity = capacity;
        }
}