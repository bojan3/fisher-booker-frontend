import { Account } from "./Account";
import { Ship } from "./Ship";

export class ShipOwner{
    id: number;
    account: Account;
    ships: Ship[]=[];

    constructor(id: number, account: Account, ships: Ship[]){
        this.id = id;
        this.account= account;
        this.ships=ships;
    }

}
