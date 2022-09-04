export class AvailabilityPeriod {
    id: number;
    startDate: Date;
    endDate: Date;
    constructor(id: number = 0, startDate: Date = new Date(), endDate: Date = new Date()){
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}