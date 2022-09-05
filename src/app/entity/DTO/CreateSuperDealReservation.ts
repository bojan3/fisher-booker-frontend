import { ReservationType } from "./ReservationType";

export class CreateSuperDealReservation {

    clientId: number;
    superDealId: number;
    type: ReservationType;

    constructor(clientId: number, superDealId: number, type: ReservationType){
        this.clientId = clientId;
        this.superDealId = superDealId;
        this.type = type;
    }

}