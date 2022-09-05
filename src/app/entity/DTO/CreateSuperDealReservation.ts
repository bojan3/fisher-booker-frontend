export class CreateSuperDealReservation {

    clientId: number;
    superDealId: number;

    constructor(clientId: number, superDealId: number){
        this.clientId = clientId;
        this.superDealId = superDealId;
    }

}