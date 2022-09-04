export class ApproveReviewDTO{

    id: number;
    comment: string;
    grade: number;
    reviewEntityId: number;
    forOwner: boolean;
    type: string;
    username: string;

    constructor(id:number, type:string, username:string, comment: string, grade: number, reviewEntityId: number, forOwner: boolean){
        this.id = id;
        this.type = type;
        this.username = username;
        this.comment = comment;
        this.grade = grade;
        this.reviewEntityId = reviewEntityId;
        this.forOwner = forOwner;
    }
}