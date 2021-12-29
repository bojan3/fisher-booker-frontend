import { Account } from "./Account";
import { Cottage } from "./Cottage";

export class CottageOwner{
    id: number;
    account: Account;
    cottages: Cottage[]=[];

    constructor(id: number, account: Account, cottages: Cottage[]){
        this.id = id;
        this.account = account;
        this.cottages=cottages;
    }


}