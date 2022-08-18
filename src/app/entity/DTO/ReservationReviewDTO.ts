import { ReservationType } from "./ReservationType";

export class ReservationReviewDTO {
    content: string;
    badReview: boolean;
    didntAppear: boolean;
    type: ReservationType;
    reservationId: number;
    constructor(content: string, badReview: boolean, didntAppear: boolean, 
        type: ReservationType, reservationId: number){
        this.content = content;
        this.badReview = badReview;
        this.didntAppear = didntAppear;
        this.type = type;
        this.reservationId = reservationId;
    }
}