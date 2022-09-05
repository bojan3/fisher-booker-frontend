import { Address } from "../Address";

export class AnswerReservationReviewDTO {
    content: string;
    badReview: Boolean;
    didntAppear: Boolean;
    type: string;
    reservationId: number;
    ownerUsername: string;
    clientUsername: string;
    clientEmail: string;
    ownerEmail: string;

    constructor( content: string, badReview: Boolean, didntAppear: Boolean, 
        type: string, reservationId: number, ownerUsername: string, 
        clientUsername: string, clientEmail: string,
        ownerEmail: string) {
            this.content = content;
            this.badReview = badReview;
            this.didntAppear = didntAppear;
            this.type = type;
            this.reservationId = reservationId;
            this.ownerUsername = ownerUsername;
            this.clientUsername = clientUsername;
            this.clientEmail = clientEmail;
            this.ownerEmail = ownerEmail;
    }

}