export class DatePeriodDTO {
    startDate: Date;
    endDate: Date;

    constructor(startDate: Date, endDate: Date) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }
}