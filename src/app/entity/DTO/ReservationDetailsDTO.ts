export class ReservationDetailsDTO {
    id: number;
    startDate: Date;
    endDate: Date;
    price: number;
    capacity: number;
    name: string;
    options: string;
    userInfo: string;
    clientId: number;
    realEstateId: number;
    constructor(id: number,
        startDate: Date,
        endDate: Date,
        price: number,
        capacity: number,
        name: string,
        options: string,
        userInfo: string,
        clientId: number,
        realEstateId: number) {
        this.id = id;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.price = price;
        this.capacity = capacity;
        this.name = name;
        this.options = options;
        this.userInfo = userInfo;
        this.clientId = clientId;
        this.realEstateId = realEstateId;
    }
}