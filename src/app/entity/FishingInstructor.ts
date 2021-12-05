import { Account } from "./Account";

export class FishingInstructor{
    id: number;
    biography: string;
    account: Account;
    

    constructor(id: number, biography: string, account: Account){
        this.id = id;
        this.biography = biography;
        this.account = account;
       
    }


}