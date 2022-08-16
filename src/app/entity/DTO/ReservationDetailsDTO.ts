export class ReservationDetailsDTO {
    id: number;
    startDate: Date;
    endDate: Date;
    price: number;
    capacity: number;
    name: string;
    options: string;
    userInfo: string;
    constructor(id: number,
        startDate: Date,
        endDate: Date,
        price: number,
        capacity: number,
        name: string,
        options: string,
        userInfo: string) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
        this.capacity = capacity;
        this.name = name;
        this.options = options;
        this.userInfo = userInfo;
    }
}