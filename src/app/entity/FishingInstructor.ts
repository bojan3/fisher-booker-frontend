import { Account } from "./Account";
import { Adventure } from "./Adventure";

export class FishingInstructor{
    id: number;
    biography: string;
    account: Account;
    adventures : Adventure[];

    constructor(id: number, biography: string, account: Account,
        adventures: Adventure[]){
        this.id = id;
        this.biography = biography;
        this.account = account;
        this.adventures = adventures;
    }


}