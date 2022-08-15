import { NumberValueAccessor } from "@angular/forms";

export class CreateReviewDTO{

    comment: string;
    grade: number;
    reviewEntityId: number;
    forOwner: boolean;

    constructor(comment: string, grade: number, reviewEntityId: number, forOwner: boolean){
        this.comment = comment;
        this.grade = grade;
        this.reviewEntityId = reviewEntityId;
        this.forOwner = forOwner;
    }
}