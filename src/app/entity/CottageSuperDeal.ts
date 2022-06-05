export class CottageSuperDeal{
    id: number;
    startDate: Date;
    discountedPrice: number;
    endDate: Date;
    duration: number;
    capacity: number;

    constructor(id: number, startDate: Date, discountedPrice: number,
        endDate: Date, duration: number, capacity: number){
            this.id = id;
            this.startDate = startDate;
            this.discountedPrice = discountedPrice;
            this.endDate = endDate;
            this.duration = duration;
            this.capacity = capacity;
        }
}
